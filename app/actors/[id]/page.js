import React from 'react'
import ActorPageTop from '@/components/appcomponents/ActorPageTop'
import { get_actor_data } from '@/lib/getActorData'

export default async function ActorPage(props) {
  
    const actor_data = await get_actor_data(props.params.id);

    return (
    <main className='min-h-screen'>

        <ActorPageTop actor_data={actor_data}></ActorPageTop>
    </main>
  )
}
