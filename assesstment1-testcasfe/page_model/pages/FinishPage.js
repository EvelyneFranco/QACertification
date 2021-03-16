import {Selector} from 'testcafe'

class FinishPage{
    constructor(){
        this.finishTitle=Selector('.subheader')
        this.orderFinish=Selector('.complete-header')
    }
}
export default new FinishPage()