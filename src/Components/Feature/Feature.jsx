// import React from 'react';
import PropTypes from 'prop-types';
import { AiFillCheckCircle} from "react-icons/ai";
const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex  text-xl text-center 
            font-semibold '>
                 <AiFillCheckCircle
                 className='text-green-700 mr-4'>

                 </AiFillCheckCircle>
                {feature}</p>
            
        </div>
    );
};
Feature.propTypes = {
    feature: PropTypes.string
  };

export default Feature;