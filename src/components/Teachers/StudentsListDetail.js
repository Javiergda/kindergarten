import React from 'react'

export const StudentsListDetail = ({ handleChange, values }) => {

    const { name, surname, id_student, breackfast, lunch1, lunch2, dessert, snack, bottle, diaper, nap, message, date, absence } = values;

    return (
        <div key={id_student} className='wrapper' onClick={handleChange}>
            <span>{name + ' ' + surname}</span>
            <div className='boxStudent'>
                <div className='title'>
                    <h5>Desayuno</h5>
                    <div className={breackfast + ' selector'} >
                        <div><button name='breackfast' value='a' id={'aa' + id_student} className={breackfast}>N</button></div>
                        <div><button name='breackfast' value='b' id={'ab' + id_student} className={breackfast}>R</button></div>
                        <div><button name='breackfast' value='c' id={'ac' + id_student} className={breackfast}>B</button></div>
                        <div><button name='breackfast' value='d' id={'ad' + id_student} className={breackfast}>T</button></div>
                    </div>
                </div>
                <div className='title'>
                    <h5>Primero</h5>
                    <div className={lunch1 + ' selector'} >
                        <div><button name='lunch1' value='a' id={'ae' + id_student} className={lunch1}>N</button></div>
                        <div><button name='lunch1' value='b' id={'af' + id_student} className={lunch1}>R</button></div>
                        <div><button name='lunch1' value='c' id={'ag' + id_student} className={lunch1}>B</button></div>
                        <div><button name='lunch1' value='d' id={'ah' + id_student} className={lunch1}>T</button></div>
                    </div>
                </div>
                <div className='title'>
                    <h5>Segundo</h5>
                    <div className={lunch2 + ' selector'} >
                        <div><button name='lunch2' value='a' id={'ai' + id_student} className={lunch2}>N</button></div>
                        <div><button name='lunch2' value='b' id={'aj' + id_student} className={lunch2}>R</button></div>
                        <div><button name='lunch2' value='c' id={'ak' + id_student} className={lunch2}>B</button></div>
                        <div><button name='lunch2' value='d' id={'al' + id_student} className={lunch2}>T</button></div>
                    </div>
                </div>
                <div className='title'>
                    <h5>Postre</h5>
                    <div className={dessert + ' selector'} >
                        <div><button name='dessert' value='a' id={'am' + id_student} className={dessert}>N</button></div>
                        <div><button name='dessert' value='b' id={'an' + id_student} className={dessert}>R</button></div>
                        <div><button name='dessert' value='c' id={'ao' + id_student} className={dessert}>B</button></div>
                        <div><button name='dessert' value='d' id={'ap' + id_student} className={dessert}>T</button></div>
                    </div>
                </div>
                <div className='title'>
                    <h5>Merienda</h5>
                    <div className={snack + ' selector'} >
                        <div><button name='snack' value='a' id={'aq' + id_student} className={snack}>N</button></div>
                        <div><button name='snack' value='b' id={'ar' + id_student} className={snack}>R</button></div>
                        <div><button name='snack' value='c' id={'as' + id_student} className={snack}>B</button></div>
                        <div><button name='snack' value='d' id={'at' + id_student} className={snack}>T</button></div>
                    </div>
                </div>
                <div className='title'>
                    <h5>Biberon</h5>
                    <div className={bottle + ' selector'} >
                        <div><button name='bottle' value='a' id={'au' + id_student} className={bottle}>1</button></div>
                        <div><button name='bottle' value='b' id={'av' + id_student} className={bottle}>2</button></div>
                        <div><button name='bottle' value='c' id={'aw' + id_student} className={bottle}>3</button></div>
                        <div><button name='bottle' value='d' id={'ax' + id_student} className={bottle}>4</button></div>
                    </div>
                </div>
                <div className='title'>
                    <h5>Pañal</h5>
                    <div className={diaper + ' selector'} >
                        <div><button name='diaper' value='a' id={'ay' + id_student} className={diaper}>1</button></div>
                        <div><button name='diaper' value='b' id={'az' + id_student} className={diaper}>2</button></div>
                        <div><button name='diaper' value='c' id={'ba' + id_student} className={diaper}>3</button></div>
                        <div><button name='diaper' value='d' id={'bb' + id_student} className={diaper}>4</button></div>
                    </div>
                </div>
                <div className='title'>
                    <h5>Siesta</h5>
                    <div className={nap + ' selector'} >
                        <div><button name='nap' value='a' id={'bc' + id_student} className={nap}>No</button></div>
                        <div><button name='nap' value='b' id={'bd' + id_student} className={nap}>1/2</button></div>
                        <div><button name='nap' value='c' id={'be' + id_student} className={nap}>1</button></div>
                        <div><button name='nap' value='d' id={'bf' + id_student} className={nap}>+1</button></div>
                    </div>
                </div>
                <div className='title absence' >
                    <h5 >Falta</h5>
                    <div className={absence + ' selector'} >
                        <div><button name='absence' value={absence} id={'bg' + id_student} >Falta</button></div>
                    </div>
                </div>
            </div>
            <div className='message'>
                <h5>Mensaje:</h5>
                <input type='text' name='message' defaultValue={message} id={'bh' + id_student} className='message' onBlur={handleChange} />
            </div>
        </div>
    )

}
