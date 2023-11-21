import Link from "next/link";

function Header() {
    return (
        <>
            <header>
                <h3>BlogDB</h3>
                <nav>
                    <Link href={`/`}>Main</Link>
                    <Link href={`/about`}>About</Link>
                    <Link href={`/contacts`}>Contacts</Link>
                </nav>
            </header>
        </>
    )
}

export default Header;
