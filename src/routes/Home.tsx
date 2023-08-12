import '../App.css'
import Navbar from '../navigation/Navbar'
import { PersonInDb } from '../essentials/Types'
import useDocumentTitle from '../hooks/Title'
import { useQuery } from "@tanstack/react-query"
import { getAllContacts } from '../essentials/Requests'
import Unpopulated from '../components/Unpopulated'
import { Link } from 'react-router-dom'
import { Github, Twitter, Instagram } from 'lucide-react'
import SocialCards from '../components/SocialCards'
import Conditional from '../components/Conditional'

const PersonComponent = ({ id, first_name, last_name, country, email, birthday, github, twitter, instagram, img }: PersonInDb) => {

  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <Link className="flex items-center space-x-3" to={'/people/' + id}>
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <Conditional condition={img != null} error={<img src={img ? img : "https://lh3.googleusercontent.com/ogw/AGvuzYYndjzvnqcnojHTE1WBhsy9TaZbuMxZR9hpRv5ZZQ=s320-c-mo"} alt="Avatar Tailwind CSS Component" />}>
                <img src={img ? img : ""} alt={first_name + " img"} />
              </Conditional>
            </div>
          </div>
          <div>
            <div className="font-bold">{first_name} {last_name}</div>
            <Conditional condition={country != null}>
              <div className="text-sm opacity-50 max-md:role">{country}</div>
            </Conditional>
          </div>
        </Link>
      </td>
      <td className="max-sm:role">
        <Conditional condition={(email == null && birthday == null) == true}>
          <>
            {email}
            <br />
            <span className="badge badge-ghost badge-sm max-md:role">{birthday}</span>
          </>
        </Conditional>
      </td>
      <td className="max-sm:role">
        <table className="table-auto">
          <thead>
            <tr>
              <Conditional condition={github != null}>
                <SocialCards dataTip="Github" href={"https://github.com/" + github}>
                  <Github className="contact-socials" />
                </SocialCards>
              </Conditional>
              <Conditional condition={twitter != null}>
                <SocialCards dataTip="Twitter" href={"https://twitter.com/" + twitter}>
                  <Twitter className="contact-socials" />
                </SocialCards>
              </Conditional>
              <Conditional condition={instagram != null}>
                <SocialCards dataTip="Instagram" href={"https://instagram.com/" + instagram}>
                  <Instagram className="contact-socials" />
                </SocialCards>
              </Conditional>
            </tr>
          </thead>
        </table>
      </td>
      <th className="max-sm:role">
        <button className="btn btn-ghost btn-xs"><Link to={'/people/' + id}>details</Link></button>
      </th>
    </tr >
  )
}

function App() {
  useDocumentTitle("Home")
  const { data, status } = useQuery({
    queryKey: ["all"],
    queryFn: () => getAllContacts(),
  })

  if (status === "loading")
    return <Unpopulated text="Loading" />

  else if (status === "error" || data === undefined)
    return <Unpopulated text="Error" />

  else if (data === null)
    return <Unpopulated text="404 Contact does not exist" />
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
              <th className="max-sm:role">Email</th>
              <th className="max-sm:role">Social Media</th>
              <th className="max-sm:role"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((e) => <PersonComponent key={e.id} {...e} />)}
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