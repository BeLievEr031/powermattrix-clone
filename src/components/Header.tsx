
function Header() {
    return (
        <div className="flex justify-center items-center gap-3 border-b-4 border-b-[#00a4a6] py-2">
            <img src="https://s.zkcdn.net/Advertisers/f45577249619480fa491d7f3a87b82bf.svg" alt="godaddylogo"
                className="w-16"
            />
            <p className="hidden text-sm sm:block">Protect your domain from theft and accidental changes.</p>
            <p className="block sm:hidden text-xs">Domain Protection: Guard threats.</p>
            <button className="hidden sm:block border border-black px-4 py-2 text-sm rounded-sm">Get Started</button>
            <a className="inline-block sm:hidden underline text-blue-800 border-l-2 border-black pl-2 text-sm">Get Started</a>
        </div>
    )
}

export default Header