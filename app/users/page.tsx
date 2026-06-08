import Link from 'next/link';


export default async function Users(){
    return (
        <div className="users-page">
            <ul className="users">
                <li className="user-button">
                    <Link className="" href="/signup">Signup</Link>
                </li>

                <li className="user-button">
                    <Link className="" href="/login">Login</Link>
                </li>
            </ul>
        </div>
    )
}