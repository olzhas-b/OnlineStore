import React, {useEffect, useState} from 'react';
import './Sale.css'
import axios from '../../../Axios/localhost';
function Sale() {
    const [data, setData] = useState<any[]>([]);
    useEffect(() => {
        async function fetchData() {
            const result = await axios.get('posts');
            setData(result.data);
        }
        fetchData();
    }, []);
    return (
        <div>
            {
                data.map(item =>
                    <div className="sections">
                        <div className="section">
                            <img src={item.image} className="image"/>
                            <div className="content">
                                <h2 className="title">
                                    {item.title}
                                </h2>
                                <p className="paragraph">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Sale;
