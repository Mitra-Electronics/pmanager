import '../App.css'
import Navbar from '../navigation/Navbar'
import { PersonInDb } from '../essentials/Types'
import useDocumentTitle from '../hooks/Title'
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { deleteContact, getAllContacts } from '../essentials/Requests'
import Unpopulated from '../components/blocks/Unpopulated'
import { Link } from 'react-router-dom'
import { Github, Twitter, Instagram, Trash2, WrapText } from 'lucide-react'
import SocialCards from '../components/cards/SocialCards'
import Conditional from '../components/blocks/Conditional'
import Cards from '../components/cards/Cards'
import defaultProfileGen from '../essentials/DefaultProfileUrl'
import Modal from '../components/blocks/Modal'
import { useRef } from 'react'

interface ComponentProps extends PersonInDb{
  modalRefProp: React.MutableRefObject<HTMLDialogElement>
}

const PersonComponent = ({ id, first_name, last_name, country, email, birthday, github, twitter, instagram, img, modalRefProp }: ComponentProps) => {

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
              <Conditional condition={img != null} error={<img src={img ? img : defaultProfileGen(first_name, last_name)} alt="Avatar Tailwind CSS Component" />}>
                {/* @ts-ignore */}
                <img src={img} alt={first_name + " img"} />
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
        <Conditional condition={(email == null && birthday == null) == false}>
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
        <Cards dataTip='Details' href={'/people/' + id}><WrapText className="contact-socials" /></Cards>
        <Cards dataTip='Delete'><Trash2 className="contact-socials" onClick={() => deleteContact(id, () => modalRefProp.current.showModal())}/></Cards>
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
  const queryClient = useQueryClient()

  const modal = useRef("") as unknown as React.MutableRefObject<HTMLDialogElement>

  const modalHandler = (e: React.FormEvent) => {
    e.preventDefault()
    modal.current.close()
    queryClient.invalidateQueries({ queryKey: ['all'] })
  }

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
            {data.map((e) => <PersonComponent key={e.id} modalRefProp={modal} {...e} />)}
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
      <Modal handleSubmit={(e) => modalHandler(e)} heading="Contact Deleted!" refModal={modal}/>
    </>
  )
}

export default App