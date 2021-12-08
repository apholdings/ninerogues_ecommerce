{
    prices && prices.map((price, index) => {
        if (price.id === 0) {
            return (
                <div key={index} className='form-check'>
                    <input
                        onChange={e => onChange(e)}
                        value={price.name}
                        name='price_range'
                        type='radio'
                        className='focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded-full'
                        defaultChecked
                    />
                    <label className='ml-3 min-w-0 flex-1 text-gray-500 font-sofiapro-light'>{price.name}</label>
                </div>
            )
        } else {
            return (
                <div key={index} className='form-check'>
                    <input
                        onChange={e => onChange(e)}
                        value={price.name}
                        name='price_range'
                        type='radio'
                        className='focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded-full'
                    />
                    <label className='ml-3 min-w-0 flex-1 text-gray-500 font-sofiapro-light'>{price.name}</label>
                </div>
            )
        }
    })
}