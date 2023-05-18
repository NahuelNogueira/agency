function Images() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 gap-8">
        <img
          src="https://images.unsplash.com/photo-1546913199-55e06682967e?ixlib=rb-1.2.1&auto=format&fit=crop&crop=focalpoint&fp-x=.735&fp-y=.55&w=1184&h=1376&q=80"
          className="w-full h-96 object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1682299633512-d6bd7831842d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
          className="w-full h-96 object-cover"
        />
      </div>
    </div>
  );
}
export default Images;
