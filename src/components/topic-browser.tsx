"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { libraryTopics, topicGroups, type TopicGroup } from "@/lib/library";
import { learningModules } from "@/lib/foundations";

const groupLabels: Record<TopicGroup, string> = {
  foundations: "MAIA foundations",
  specializations: "MIC specializations",
  projects: "Research projects",
};

export function TopicBrowser() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState<TopicGroup | "all">("all");

  const topics = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return libraryTopics.filter((topic) => {
      const matchesGroup = group === "all" || topic.group === group;
      const matchesQuery =
        normalized.length === 0 ||
        topic.name.toLowerCase().includes(normalized) ||
        topic.summary.toLowerCase().includes(normalized);
      return matchesGroup && matchesQuery;
    });
  }, [group, query]);

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="w-full md:max-w-sm">
          <label htmlFor="topic-search" className="text-sm font-medium">
            Search topics
          </label>
          <input
            id="topic-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="mt-1 w-full border border-line bg-paper px-3 py-2"
            placeholder="Physics, registration, airway"
          />
        </div>
        <fieldset>
          <legend className="text-sm font-medium">Topic group</legend>
          <div className="mt-1 flex flex-wrap gap-2">
            {topicGroups.map((item) => (
              <label key={item.id} className="cursor-pointer">
                <input
                  type="radio"
                  name="topic-group"
                  value={item.id}
                  checked={group === item.id}
                  onChange={() => setGroup(item.id)}
                  className="peer sr-only"
                />
                <span className="inline-block border border-line px-3 py-1 text-sm peer-checked:border-accent peer-checked:bg-accent-soft peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent">
                  {item.label}
                </span>
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <p className="mt-4 text-sm text-muted" aria-live="polite">
        {topics.length} {topics.length === 1 ? "topic" : "topics"}
      </p>

      <ul className="mt-4 grid gap-4 md:grid-cols-2">
        {topics.map((topic) => {
          const foundation = topic.foundationSlug
            ? learningModules.find((module) => module.slug === topic.foundationSlug)
            : undefined;
          return (
            <li key={topic.slug} className="border border-line bg-paper p-4">
              <p className="font-mono text-xs tracking-wide text-muted">{groupLabels[topic.group]}</p>
              <h3 className="mt-2 font-serif text-xl">{topic.name}</h3>
              <p className="mt-2 leading-7">{topic.summary}</p>
              {foundation ? (
                <Link
                  href={`/foundations/${foundation.slug}`}
                  className="mt-3 inline-block text-sm text-accent underline underline-offset-4"
                >
                  Learning module
                </Link>
              ) : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
