import farmer from '../screenshots/farmer-one.png';

export default function Projects () {
    return (
        <div className="project">
            <span className="header">.</span>
        <div className="projects">
           < div className="titles">
        <h1>Overview</h1>
        <h2>Project Name:<span> M-Garden project (the Mobile Garden) project</span></h2>
        <h3><span>(Evergreen Farms Ltd E-commerce App Prototype)</span></h3>
        <h4>Category: <span>Web Development</span></h4>
        <h5>Technology: <span>MERN Stack + React Redux Toolkit</span></h5>
        <hr/>
</div>
<div className="description">
        <h1>Description</h1>
        <p>Evergreen is a multivendor e-commerce app that has three categories of users:</p>
            <ul>
                <li>Farmers (food producers) - Primary Seller</li>
                <li>Grocers (food producers and/or food vendors) - Can choose to be a buyer or a seller</li>
                <li>Consumers (buyers) - Clients who are the majority of the users/targer audience of the app.</li>
            </ul>

            <div className="users" >
                <ul>
                    <li>
                        <h4>Primary seller(Farmer)</h4>

                <p>Here, the farmers are able to set up an online market stall, where they can display and sell their farm produce 
                    at a <span>wholesale</span> or <span>retail</span> basis to <span>either</span> a <span>grocer </span>
                    or <span>consumer</span>.
                    The farmer is allowed to sell their goods at their preferred price. </p>
                    </li>
                    <li>
                        <h4>Grocers - Secondary buyers and/or sellers</h4>
                        <p>The grocers fit into both the buyers and sellers categories as they can buy produce from the
                             <span>farmers</span> and sell to the <span>consumers</span> at their desired prices.
                             The grocer can set up a stall with which he can add products for sale.</p>
                    </li>

                    <p className="note">It is worth noting that the products that are input by the farmers and grocers are the ones on display 
                        on the market page for purchase by buyers.
                    </p>
                    <li>
                        <h4>The Buyer/Consumer</h4>
                        <p>The consumer is able to see all the products available on the app
                            as they are displayed in the market section. One is then able to select an item, view it, add it to basket and checkout, resulting in a complete transaction.
                        </p>
                    </li>
                </ul>
            
            </div>
            <div className="goals">
                <h1>Project Goals</h1>
                <p>Evergreen was created to enable direct communication between producers of food and buyers,
                    to eliminate the use of middlemen in the trade.
                    This is because these middlemen are the link between the buyers and the producers, and they dictate food prices.
                    As a result, the farmers do not always get the rightful gains of their hardwork and the consumer ends up paying more.
                    With evergreen in place, the farmer is able to sell their proudce at optimum prices, while still reducing the cost to the consumer,
                    hence both parties are satisfied.
                    This in turns results in an improvement of food security.
                    Another benefit is that a wider demographic is reached as it is an online platform that can be accessed remotely.
                    Orders can be made and deliveries can be organized online. 
                </p>
            </div>
            <div className="link">
                <h5>Project Link: 
                    <a href="https://evergreen-farms-limited-git-master-mugishaa77.vercel.app/">
                        Click Here
                    </a>
                </h5>

            </div>
        

        
        </div>
        </div>
        </div>
    );
}