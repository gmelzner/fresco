interface EmptyStateProps {
  title: string;
  description: string;
}

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="text-center py-12">
      <div className="text-4xl mb-4 opacity-30">📭</div>
      <h3 className="font-display text-lg font-bold text-bark mb-1">
        {title}
      </h3>
      <p className="text-sm text-bark-light/60 max-w-sm mx-auto">
        {description}
      </p>
    </div>
  );
}
