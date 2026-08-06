"use client";

import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

type CommandPaletteProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

type CommandItem = {
  id: string;
  label: string;
  perform: () => void;
};

function downloadResume() {
  const link = document.createElement("a");
  link.href = siteConfig.resumeUrl;
  link.download = "";
  link.click();
}

function openExternal(url: string) {
  window.open(url, "_blank", "noopener,noreferrer");
}

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const items: CommandItem[] = [
    {
      id: "go-experience",
      label: "Navigation: Go to Experience",
      perform: () => router.push("/#experience"),
    },
    {
      id: "go-projects",
      label: "Navigation: Go to Projects",
      perform: () => router.push("/#projects"),
    },
    {
      id: "download-resume",
      label: "Action: Download Resume",
      perform: downloadResume,
    },
    {
      id: "copy-email",
      label: "Action: Copy Email Address",
      perform: () => {
        navigator.clipboard.writeText(siteConfig.email).catch(() => {});
      },
    },
    {
      id: "view-github",
      label: "External: View GitHub",
      perform: () => openExternal(siteConfig.githubUrl),
    },
  ];

  const filteredItems = items.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase()),
  );
  const activeItem =
    filteredItems[Math.min(activeIndex, filteredItems.length - 1)];

  useEffect(() => {
    function handleShortcut(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        onOpenChange(!open);
      }
    }

    document.addEventListener("keydown", handleShortcut);
    return () => document.removeEventListener("keydown", handleShortcut);
  }, [open, onOpenChange]);

  useEffect(() => {
    if (!open) return;

    previouslyFocused.current = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    const raf = requestAnimationFrame(() => inputRef.current?.focus());

    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = "";
      previouslyFocused.current?.focus();
    };
  }, [open]);

  function close() {
    setQuery("");
    setActiveIndex(0);
    setCopied(false);
    onOpenChange(false);
  }

  function handleSelect(item: CommandItem) {
    item.perform();

    if (item.id === "copy-email") {
      setCopied(true);
      window.setTimeout(close, 900);
      return;
    }

    close();
  }

  function handleKeyDown(event: ReactKeyboardEvent<HTMLInputElement>) {
    if (event.key === "Escape") {
      close();
      return;
    }

    if (filteredItems.length === 0) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((index) => (index + 1) % filteredItems.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex(
        (index) => (index - 1 + filteredItems.length) % filteredItems.length,
      );
    } else if (event.key === "Enter") {
      event.preventDefault();
      if (activeItem) handleSelect(activeItem);
    }
  }

  if (!open) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
      className="fixed inset-0 z-[100] flex items-start justify-center bg-slate-950/60 px-4 pt-[15vh] backdrop-blur-sm"
      onClick={close}
    >
      <div
        className="w-full max-w-lg overflow-hidden rounded-xl border border-slate-800 bg-slate-900/95 shadow-2xl shadow-black/40 backdrop-blur-xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-slate-800 px-4">
          <span className="text-slate-500" aria-hidden="true">
            ⌘
          </span>
          <input
            ref={inputRef}
            role="combobox"
            aria-expanded="true"
            aria-controls="command-palette-list"
            aria-activedescendant={activeItem?.id}
            aria-autocomplete="list"
            aria-label="Search commands"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setActiveIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Type a command..."
            className="h-12 w-full bg-transparent text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none"
          />
        </div>

        <ul
          id="command-palette-list"
          role="listbox"
          className="max-h-72 overflow-y-auto p-2"
        >
          {filteredItems.length === 0 ? (
            <li className="px-3 py-6 text-center text-sm text-slate-500">
              No matching commands
            </li>
          ) : (
            filteredItems.map((item, index) => {
              const isActive = index === activeIndex;
              const [group, ...rest] = item.label.split(": ");
              const isCopyItem = item.id === "copy-email";

              return (
                <li
                  key={item.id}
                  id={item.id}
                  role="option"
                  aria-selected={isActive}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => handleSelect(item)}
                  className={cn(
                    "flex cursor-pointer items-center rounded-lg px-3 py-2.5 text-sm transition",
                    isActive ? "bg-teal-500/10 text-teal-300" : "text-slate-300",
                  )}
                >
                  <span className="text-slate-500">{group}:</span>
                  <span className="ml-1">
                    {isCopyItem && copied ? "Copied!" : rest.join(": ")}
                  </span>
                </li>
              );
            })
          )}
        </ul>

        <div className="flex items-center gap-4 border-t border-slate-800 px-4 py-2.5 text-xs text-slate-500">
          <span>↑↓ Navigate</span>
          <span>↵ Select</span>
          <span>Esc Close</span>
        </div>
      </div>
    </div>,
    document.body,
  );
}
