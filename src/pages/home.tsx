
interface Props {
    handleSubmit: (e: any) => void,
    error: string,
    value: string,
    setValue: (e: any) => void,

}
function Home(props: Props) {
    const { handleSubmit, value, setValue, error } = props

    return (
        <div className='flex justify-center items-center mt-80'>
            <form className="w-full max-w-sm" onSubmit={handleSubmit}>
                <div className="flex items-center border-b border-teal-500 py-2">
                    <input
                        className="appearance-none bg-transparent border-none w-screen text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none text-white"
                        type="text"
                        placeholder="Enter your wallet address"
                        aria-label="wallet address"
                        name="address"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <input className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded cursor-pointer" type="submit" value="Connect" />

                </div>
                {error && (<p>{error}</p>)}
            </form>
        </div>
    )
}

export default Home
