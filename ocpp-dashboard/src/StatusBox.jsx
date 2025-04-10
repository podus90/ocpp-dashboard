function StatusBox({ status }) {
  return (
    <div className="mb-4 text-lg font-bold">
      Status stacji: <span className="text-green-500">{status}</span>
    </div>
  );
}

export default StatusBox;
