/* eslint-disable react/prop-types */



function Experience({ id, year, title, description, companyName }) {

  

    return (
        <div key={id} className="dark:bg-gray-secondary bg-gray-200 p-4 rounded-lg w-full sm:max-w-xs border dark:border-gray-tertiary border-gray-300">
            
            <h3 className="text-xl font-bold mt-2 dark:text-gray-200 text-gray-800">
                {title}
            </h3>

            <h5 className={`w-fit text-xs mt-2 rounded-full px-3 py-1 bg-purple-400  text-white `} >
                {companyName}
            </h5>   
            <p className=" pt-2 text-green-500 text-lg">
                {year}
            </p>

            <p className="mt-2 dark:text-gray-300 text-gray-600">
                {description}
            </p>

            
        </div>
    )
}

export default Experience