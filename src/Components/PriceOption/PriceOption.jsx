
import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';
const PriceOption = ({option}) => {
    const {name,price,features}=option;
    return (
        <div className='bg-blue-400 rounded-md p-4 text-black flex flex-col'>
            <h2 className="text-center">
                <span className='text-7xl font-extrabold'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className='text-3xl text-center my-8'>{name}</h4>
            <div className='pl-6 flex-grow'>
            {
                features.map((feature,index)=><Feature
                    key={index} feature={feature}></Feature>)
            }
            </div>
            <button className='bg-green-500 rounded-md p-2 mt-8 text-center w-full text-blue-800 font-bold hover:bg-green-900
            '>Buy Now</button>
            
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
  };

export default PriceOption;