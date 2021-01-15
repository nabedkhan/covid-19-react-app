import React from 'react';
import './TableData.css'

const TableData = (props) => {
    const countries = props.countries;
    return (
        <div className='tableData'>
            <h3 className='mb-0 text-info'>Corona Cases on Country Based</h3>
            <hr className='mt-1' />
            <div className="list">
                <table>
                    <tbody>
                        {
                            countries.map(country =>
                                <tr>
                                    <td>{country.country}</td>
                                    <td className='text-right'><strong>{country.cases}</strong></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TableData;