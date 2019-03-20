import React, {Component} from "react";
import Axios from 'axios';
class Total extends Component {

    state = {
        values: []
    }
    async componentDidMount () {
        const response = await axios.get(query_url, {headers:headers})
        //console.log(response.data.data[0]); 
        if(response) {
            const data = await Promise.all(response.data.data
                .map((data, index) => axios.get(`${some_url}${data}`, {headers:headers})
            ))
    
            // handle responses
            let usaVal = 0, worldVal = 0;
            data.forEach(response => {
                for (let j=0; j<response.data.data[0]['metrics'].slice(0, 30).length; j++) {
                    let detail = response.data.data[0]['metrics'][j];
                    if (detail['country'] === 'US') {
                        usaVal += detail['value'];
                    } else {
                        worldVal += detail['value'];
                    }      
                }
            })
            this.setState({values: {usa: usaVal, world: worldVal}});
         }
    }
}
export default Total;