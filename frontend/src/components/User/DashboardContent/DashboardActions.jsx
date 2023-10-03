function DashboardActions({ userActns, allActions }) {
  return (
    <div className="flex flex-col space-y-2 rounded-lg border border-gray-300 p-4 shadow-md">
      <div className="flex">
        <p>My Actions:</p>
        {userActns && allActions && (
          <div className="whitespace-nowrap pl-1">
            <span className="text-green-600">{userActns.length}</span> /{' '}
            <span className="text-red-600">{allActions.length}</span>
          </div>
        )}
      </div>
      <div className="flex">
        <div className="whitespace-nowrap">Accumulated Points:</div>
        {userActns && (
          <div className="pl-1 text-green-600">
            {userActns.reduce((acc, curr) => (acc += curr.points), 0)}
          </div>
        )}
      </div>
    </div>
  );
}

export default DashboardActions;
