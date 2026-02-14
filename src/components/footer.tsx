export function Footer() {
  return (
    <footer className="border-t border-neutral-100 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12 text-center">
        <p className="text-sm text-neutral-400">
          &copy; {new Date().getFullYear()} Applied Longevity. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
