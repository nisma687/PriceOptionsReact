// import React from 'react';

import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    
        const priceOptions= [
          {
            "id": 1,
            "name": "Basic Membership",
            "price": 29.99,
            "features": [
              "Access to cardio equipment",
              "Access to weightlifting area",
              "Locker room access",
              "Free water fountain"
            ]
          },
          {
            "id": 2,
            "name": "Silver Membership",
            "price": 49.99,
            "features": [
              "Access to cardio equipment",
              "Access to weightlifting area",
              "Locker room access",
              "Free water fountain",
              "Group fitness classes (limited)",
              "Discounts on gym merchandise"
            ]
          },
          {
            "id": 3,
            "name": "Gold Membership",
            "price": 79.99,
            "features": [
              "Access to cardio equipment",
              "Access to weightlifting area",
              "Locker room access",
              "Free water fountain",
              "Unlimited group fitness classes",
              "Access to sauna and steam room",
              "Personalized fitness assessment",
              "Nutritional counseling"
            ]
          },
          {
            "id": 4,
            "name": "Platinum Membership",
            "price": 99.99,
            "features": [
              "Access to cardio equipment",
              "Access to weightlifting area",
              "Locker room access",
              "Free water fountain",
              "Unlimited group fitness classes",
              "Access to sauna and steam room",
              "Personal training sessions (2/month)",
              "Access to swimming pool",
              "Towel service"
            ]
          }
        ];
      
      
    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices in the Town</h2>
           <div className="grid md:grid-cols-3 gap-6">
           {
                priceOptions.map(option=><PriceOption key={option.id} option={option}></PriceOption>)
            }
           </div>
        </div>
    );
};

export default PriceOptions;