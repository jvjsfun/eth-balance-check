interface Props {
  address: string,
  balance: string,
}

const Dashboard = (props: Props) => {
  const { address, balance } = props

  return (
    <div className='flex flex-col items-center mt-80'>
      <h3 className='text-white font-mono	text-lg'>wallet adddres is: {address}</h3>
      <h3 className='text-white font-mono	text-md'>Your balance is: {balance && `~${balance} ETH`}</h3>
    </div>
  )
}

export default Dashboard
