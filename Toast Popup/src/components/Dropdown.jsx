import PropTypes from 'prop-types'

function Dropdown({arr , value}) {
  return (
    <div className='my-2'>
        <select name="" id="" className='border px-2 py-1'
        onChange={(e) => value(e.target.value)}
        >
            {arr.map((item) => (
                <option value={item} key={item}> {item} </option>
            ))}
        </select>
    </div>
  )
}

Dropdown.propTypes = {
    arr : PropTypes.arr,
    value:PropTypes.func
}

export default Dropdown