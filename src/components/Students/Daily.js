import React from 'react'

export const Daily = ({ dailyStudent }) => {

    const { id, student_id, breackfast, lunch1, lunch2, dessert, snack, bottle, diaper, nap, message, date, absence } = dailyStudent;

    return (
        <div className='daily_main'>
            <div className='wrapper'>
                <div className='box1'>
                    {absence && <span>FALTA</span>}
                </div>
                <h4>COMIDAS</h4>
                <h5>Desayuno</h5>
                <div className={breackfast + ' selector'} >
                    <div><span>Nada</span></div>
                    <div><span>Regular</span></div>
                    <div><span>Bien</span></div>
                    <div><span>Todo</span></div>
                </div>
                <h5>Primero</h5>
                <div className={lunch1 + ' selector'}>
                    <div><span>Nada</span></div>
                    <div><span>Regular</span></div>
                    <div><span>Bien</span></div>
                    <div><span>Todo</span></div>
                </div>
                <h5>Segundo</h5>
                <div className={lunch2 + ' selector'}>
                    <div><span>Nada</span></div>
                    <div><span>Regular</span></div>
                    <div><span>Bien</span></div>
                    <div><span>Todo</span></div>
                </div>
                <h5>Postre</h5>
                <div className={dessert + ' selector'}>
                    <div><span>Nada</span></div>
                    <div><span>Regular</span></div>
                    <div><span>Bien</span></div>
                    <div><span>Todo</span></div>
                </div>
                <h5>Merienda</h5>
                <div className={snack + ' selector'}>
                    <div><span>Nada</span></div>
                    <div><span>Regular</span></div>
                    <div><span>Bien</span></div>
                    <div><span>Todo</span></div>
                </div>
                <h4>BIBERONES</h4>
                <div className={bottle + ' selector'}>
                    <div><span>1</span></div>
                    <div><span>2</span></div>
                    <div><span>3</span></div>
                    <div><span>4</span></div>
                </div>
                <h4>CAMBIO PAÑAL</h4>
                <div className={diaper + ' selector'}>
                    <div><span>1</span></div>
                    <div><span>2</span></div>
                    <div><span>3</span></div>
                    <div><span>4</span></div>
                </div>
                <h4>SIESTA</h4>
                <div className={nap + ' selector'}>
                    <div><span>No</span></div>
                    <div><span>1/2 hora</span></div>
                    <div><span>1 hora</span></div>
                    <div><span>+1 hora</span></div>
                </div>
                <h4>MENSAJE</h4>
                <div className='{} selector'>
                    <span>{message}</span>
                </div>
            </div>
        </div>
    )
}
