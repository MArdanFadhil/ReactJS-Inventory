import React from 'react'

export default function Table() {

    const data = [
        {
          nama: 'el mangrove',
          rombel: 'XI - 5',
          rayon: 'aceh',
        },
        {
          nama: 'el posting ulang',
          rombel: 'XI - 0',
          rayon: 'liat posting ulang yamal',
        },
        {
          nama: 'el bola bali',
          rombel: 'XI - 5 ',
          rayon: 'bola bali nggo dolanan',
        },
      ];

  return (
    <>
        <table border="1px solid white">
            <thead>
                <tr>
                    {
                        props.title.map((val, i) => (
                            <td>{val}</td>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    props.data
                }
            </tbody>
        </table>
    </>
  )
}
