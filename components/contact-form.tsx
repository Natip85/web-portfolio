"use client";

import { sendContactEmail } from "@/actions/send-email";
import { useState } from "react";
import { useForm } from "react-hook-form";

type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    defaultValues: { name: "", email: "", message: "" },
    mode: "onBlur",
  });

  async function onSubmit(values: ContactFormValues) {
    setStatus("idle");

    const formData = new FormData();
    formData.set("name", values.name);
    formData.set("email", values.email);
    formData.set("message", values.message);

    const result = await sendContactEmail(formData);

    if (result?.success) {
      setStatus("success");
      reset();
      return;
    }

    setStatus("error");
    setError("root", {
      message: result?.error ?? "Something went wrong. Try again.",
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div className="space-y-1">
        <input
          placeholder="Your name"
          aria-invalid={errors.name ? "true" : "false"}
          className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-yellow-500/60 focus:ring-2 focus:ring-yellow-500/20"
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 2,
              message: "Name must be at least 2 characters",
            },
          })}
        />
        {errors.name && (
          <p className="text-sm text-red-400">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-1">
        <input
          type="email"
          placeholder="Email address"
          aria-invalid={errors.email ? "true" : "false"}
          className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-yellow-500/60 focus:ring-2 focus:ring-yellow-500/20"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email",
            },
          })}
        />
        {errors.email && (
          <p className="text-sm text-red-400">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-1">
        <textarea
          placeholder="Tell me about your project (goals, scope, timeline)..."
          aria-invalid={errors.message ? "true" : "false"}
          className="w-full min-h-36 resize-y rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-yellow-500/60 focus:ring-2 focus:ring-yellow-500/20"
          {...register("message", {
            required: "Message is required",
            minLength: {
              value: 10,
              message: "Message must be at least 10 characters",
            },
          })}
        />
        {errors.message && (
          <p className="text-sm text-red-400">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-xl bg-yellow-500 px-4 py-3 font-semibold text-black transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {isSubmitting ? "Sending..." : "Send message"}
      </button>

      {status === "success" && (
        <p className="text-green-400">
          Message sent — I&apos;ll get back to you soon.
        </p>
      )}

      {status === "error" && (
        <p className="text-red-400">
          {errors.root?.message ?? "Something went wrong. Try again."}
        </p>
      )}
    </form>
  );
}
