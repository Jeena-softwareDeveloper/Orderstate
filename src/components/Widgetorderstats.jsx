import React from 'react'
import Orderstat from './orderstat'
function Widgetorderstats({data}) {
  return (
    <div>
 <Orderstat title="Total Orders" value={data.totalOrders}/>
 <Orderstat title="Shipped Orders" value={data.shippedOrders} />
<Orderstat title="Pending Orders" value={data.pendingOrders} />
<Orderstat title="Delivered Orders" value={data.deliveredOrders} />
<Orderstat title="Canceled Orders" value={data.canceledOrders} />
    </div>
  )
}

export default Widgetorderstats