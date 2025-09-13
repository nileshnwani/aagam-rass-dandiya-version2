export default function TestTailwind() {
  return (
    <div className="p-8 bg-red-500 text-white text-center">
      <h1 className="text-4xl font-bold mb-4">Tailwind CSS Test</h1>
      <p className="text-lg">If you can see this styled properly, Tailwind is working!</p>
      <div className="mt-4 p-4 bg-blue-500 rounded-lg">
        <p>This should be a blue box with rounded corners</p>
      </div>
    </div>
  );
}
