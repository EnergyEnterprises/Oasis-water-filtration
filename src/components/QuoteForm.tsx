"use client";

import { FormEvent, useState } from "react";
import { cta, interestOptions, noticeOptions, site } from "@/lib/site";

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="card p-6 sm:p-8" role="status">
        <h2 className="font-display text-2xl text-deep">Thanks — please call to confirm</h2>
        <p className="mt-3 leading-relaxed text-muted">
          The surest way to get this request to us is to call{" "}
          <a className="font-semibold text-teal underline" href={site.phoneHref}>
            {site.phoneDisplay}
          </a>
          .
        </p>
        <a className="btn btn-primary mt-6" href={site.phoneHref}>
          Call {site.phoneDisplay}
        </a>
        <button
          type="button"
          className="btn btn-outline mt-3"
          onClick={() => setSubmitted(false)}
        >
          Edit the form
        </button>
      </div>
    );
  }

  return (
    <form className="card grid gap-5 p-5 sm:p-8" onSubmit={onSubmit} noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" />
      </div>

      <div className="field">
        <label htmlFor="address">Address or city</label>
        <input
          id="address"
          name="address"
          type="text"
          autoComplete="street-address"
          placeholder="Street, city, or both"
        />
      </div>

      <fieldset className="grid gap-3">
        <legend className="legend">Well or city water</legend>
        <label className="flex items-center gap-3 text-sm">
          <input type="radio" name="source" value="well" defaultChecked />
          Private well
        </label>
        <label className="flex items-center gap-3 text-sm">
          <input type="radio" name="source" value="city" />
          City water
        </label>
      </fieldset>

      <fieldset className="grid gap-3">
        <legend className="legend">What you want quoted</legend>
        {interestOptions.map((option) => (
          <label key={option.id} className="flex items-center gap-3 text-sm">
            <input
              type="radio"
              name="interest"
              value={option.id}
              defaultChecked={option.id === "both"}
            />
            {option.label}
          </label>
        ))}
      </fieldset>

      <fieldset className="grid gap-3">
        <legend className="legend">What you notice</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {noticeOptions.map((option) => (
            <label key={option.id} className="flex items-center gap-3 text-sm">
              <input type="checkbox" name="notice" value={option.id} />
              {option.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" />
      </div>

      <p className="text-sm text-muted">
        A phone call is the surest way to request a test. Call{" "}
        <a className="font-semibold text-teal underline" href={site.phoneHref}>
          {site.phoneDisplay}
        </a>{" "}
        anytime.
      </p>

      <button type="submit" className="btn btn-primary w-full sm:w-auto">
        {cta.primary}
      </button>
    </form>
  );
}
