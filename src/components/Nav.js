import React from 'react'
import '../scss/nav.scss'
import { useSelector, useDispatch } from "react-redux";
import { changeActiveFilter,clearStatus,toggleAll } from '../redux/todo/todoSlice';

export default function Nav() {
     // eslint-disable-next-line no-unused-vars
        const todos = useSelector((state) => state.todos);
        const dispatch = useDispatch();
    

  return (
    <div className='nav-btns'>
        <button style={{backgroundColor:'#187498',color:'#fff'}} onClick={()=> dispatch(changeActiveFilter(todos.activeFilter === 'all' ? 'toggle' : 'all'))}>
            {todos.activeFilter === 'all' ? 'Sadece Yapılacakları Göster' : 'Tümünü Göster'}
        </button>
        
        <button style={{backgroundColor:'#36AE7C',color:'#fff'}} onClick={()=> dispatch(toggleAll(todos))}>Hepsini Yapıldı Olarak İşaretle</button>
        <button style={{backgroundColor:'#EB5353',color:'#fff'}} onClick={()=> dispatch(clearStatus(todos))}>Yapılanları Kaldır</button>
    </div>
  )
}
