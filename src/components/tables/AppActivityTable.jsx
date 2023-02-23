export default function AppActivityTable({ firstCol }) {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>{firstCol}</th>
            <th>Time Spent</th>
            <th className="text-center">% Used</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 2, 2].map((item, index) => (
            <tr key={index}>
              <td className="">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-red-800 rounded-full "></div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </div>
              </td>
              <td className="text-center">30.54</td>
              <td className="w-full ">
                <div className="w-full flex items-center justify-between space-x-[24px] ">
                  <p>Purple</p>
                  <div className="w-full h-2 bg-gray-500 rounded-full ">
                    <div className="w-[61%] h-2 bg-[#37A7AE] rounded-full"></div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
