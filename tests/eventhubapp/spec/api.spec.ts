
import {apitest} from "../../../../TS_Playwright/src/eventhubapp/fixtures/commonfixture"
import {objectitem} from "../dtos/commontypes";

const devicedetailList: any[]= JSON.parse(JSON.stringify(require('../../resources/devicedetail.json')))

apitest.describe('Api test suite',async()=>{

    apitest('Get call', async ({basectx}) => {
           const resp=await basectx.get('/objects',
               {});
           const objectlist:objectitem[]=await resp.json();
           console.log(objectlist.filter(item=>item.name.includes('Apple'))
               .length)
           console.log(objectlist.length)
    })
    devicedetailList.forEach(item=>{
        apitest(`post call with ${item.name}`, async ({basectx}) => {
            await basectx.post('/collections/laptops/objects',{
                data: item
            })
        })
    })



    apitest.skip('put call', async ({request}) => {})
    apitest.skip('delete call', async ({request}) => {})
});