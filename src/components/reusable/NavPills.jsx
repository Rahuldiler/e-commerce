import React from 'react';
// import
// {
//     MDBTabs,
//     MDBTabsItem,
//     MDBTabsLink,
//     MDBTabsContent,
//     MDBTabsPane,
//     MDBRow
// } from 'mdb-react-ui-kit';

export default function NavPills()
{
    // const [verticalActive, setVerticalActive] = useState('tab1');

    // const handleVerticalClick = (value) =>
    // {
    //     if (value === verticalActive)
    //     {
    //         return;
    //     }

    //     setVerticalActive(value);
    // };

    return (
        <>
            {/* <MDBRow>
                <div className='col-md-3'>
                    <MDBTabs pills className='flex-md-column text-center'>
                        <MDBTabsItem>
                            <MDBTabsLink className='mt-0' onClick={() => handleVerticalClick('tab1')} active={verticalActive === 'tab1'}>
                                Description
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleVerticalClick('tab2')} active={verticalActive === 'tab2'}>
                                Additional Information
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <MDBTabsLink className='mb-0' onClick={() => handleVerticalClick('tab3')} active={verticalActive === 'tab3'}>
                                Our Review
                            </MDBTabsLink>
                        </MDBTabsItem>
                    </MDBTabs>
                </div>
                <div className='col-md-9'>
                    <MDBTabsContent>
                        <MDBTabsPane show={verticalActive === 'tab1'}>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus ducimus, sit vel
                                nemo corporis consequuntur porro animi iste
                                voluptate, reiciendis dolor aliquam fuga magni ut? Ratione iusto non consequuntur porro.
                            </p>

                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus ducimus, sit vel
                                nemo corporis consequuntur porro animi iste
                                voluptate, reiciendis dolor aliquam fuga magni ut? Ratione iusto non consequuntur porro.
                            </p>
                        </MDBTabsPane>
                        <MDBTabsPane show={verticalActive === 'tab2'}>Profile content</MDBTabsPane>
                        <MDBTabsPane show={verticalActive === 'tab3'}>Messages content</MDBTabsPane>
                    </MDBTabsContent>
                </div>
            </MDBRow> */}
        </>
    );
}