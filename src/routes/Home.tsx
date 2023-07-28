import '../App.css'
import Navbar from '../components/Navbar'
import useDocumentTitle from '../essentials/Title'

interface PersonProps{
  name: string,
  country: string,
  company: string,
  role: string,
  colour: string
}

const Person = ({name, country, company, role, colour}:PersonProps) => {
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src="https://lh3.googleusercontent.com/ogw/AGvuzYYndjzvnqcnojHTE1WBhsy9TaZbuMxZR9hpRv5ZZQ=s320-c-mo" alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{country}</div>
          </div>
        </div>
      </td>
      <td>
        {company}
        <br />
        <span className="badge badge-ghost badge-sm max-lg:role">{role}</span>
      </td>
      <td>{colour}</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  )
}

function App() {
  useDocumentTitle("Home")
  return (
    <>
      <Navbar />
      <div className="overflow-x-auto lg:mx-40">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <Person name="Hart Hagerty" country="United States" company="Zemlak, Daniel and Leannon" role="Desktop Support Technician" colour="Purple"/>
            {/* row 2 */}
            <Person name="Brice Swyre" country="China" company="Carroll Group" role="Tax Accountant" colour="Red"/>
            {/* row 3 */}
            <Person name="Marjy Ferencz" country="Russia" company="Rowe-Schoen" role="Office Assistant I" colour="Crimson"/>
            {/* row 4 */}
            <Person name="Yancy Tear" country="Brazil" company="Wyman-Ledner" role="Community Outreach Specialist" colour="Indigo"/>
          </tbody>
          {/* foot */}
          {/*<tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
            </tfoot>*/}

        </table>
      </div>
    </>
  )
}

export default App
