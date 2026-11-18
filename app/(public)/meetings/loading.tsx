export default function Loading() {
  return (
    <div className="flex justify-center items-center py-20 text-slate-500 space-x-2">
      <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
      <span>Loading meeting program...</span>
    </div>
  );
}