import React, { useState, useEffect } from 'react'
import AsyncSelect from 'react-select/async';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { EditIcon, DeleteIcon } from "../../../Icons/icons.component";
import { get, put, deleteMethod } from "../../../services/CommanService";
import toast from 'react-hot-toast';
import { useNavigate, NavLink } from 'react-router-dom';
import { store } from '../../../store/store';

const ViewSetting = () => {
  let navigate = useNavigate();
  const state = store.getState();
  const [settingList, setSettingList] = useState([]);
  const [setting, setSetting] = useState({})
  const getSettingList = (id) => {
    const cid = id || client_id ||  state.auth.auth.id
    get("artical/get-unique-setting/" + cid).then((response) => {
      setSettingList(response.data.settings)
      setSetting(response.data)
    })
      .catch(() => {
        // handleLoginFailure({ status: UNAUTHORIZED });
      })

  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [editData, setEditData] = useState({})
  const [editMode, setEditMode] = useState(false)
  const [client_id, setClientId] = useState()

  const editOpen = (editData) => {
    handleShow()
    setEditMode(true)
    setEditData(editData);
  }

  const saveSetting = () => {
    const promise = new Promise((resolve, reject) => {
      editData.order_id = 8
      put("artical/update-setting/" + editData.id, editData).then((response) => {
        handleShow()
        setEditMode(false)
        setEditData({});
        getSettingList();
        handleClose()
        resolve()
      })
        .catch(() => {
          reject()
        })
    })

    toast.promise(
      promise,
      {
        loading: 'updating...',
        success: <b>Setting updated</b>,
        error: <b>Could not update.</b>,
      },
      {
        style: {
          width: '200px',
          paddingRight: '10px',
        },
      }
    );
  }

  const deleteSetting = (id) => {
    deleteMethod("artical/delete-setting/" + id).then((response) => {
      toast.success("Setting successfully deleted");
      getSettingList()
    })
      .catch(() => {
        // handleLoginFailure({ status: UNAUTHORIZED });
      })
  }

  const promiseOptions = (inputValue) =>
    new Promise((resolve) => {
      inputValue = inputValue || 'a'

      get("artical/getclientlist/" + inputValue).then((response) => {
        resolve(response.data.client.map((e) => ({
          value: e.id,
          label: e.client_name
        })));
      })

    });

  const clientChange = (e) => {
    setClientId(e.value)
    getSettingList(e.value);
  }

  const addSetting = () => {
    navigate("/add-setting");
    // toast.promise(
    //   getSettingList(1),
    //    {
    //      loading: 'Saving...',
    //      success: <b>Settings saved!</b>,
    //      error: <b>Could not save.</b>,
    //    }
    //  );
  }
  useEffect(() => {
    getSettingList();
  }, []);


  return (
    <>


      {/* <Toaster /> */}
      <div className="page-title">
        <h1 >
          View Setting
        </h1>
      </div>
      <div style={{ margin: "25px 20px 0 35px", marginTop: "80px" }}>
        <div style={{ "padding": "4px 4px 32px" }}>      <button className="btn btn-success pull-right" style={{ float: "right" }} onClick={addSetting}>Add Setting</button>
        </div>

        <div className='client-section'>
          <label htmlFor="country" className="form-label">Select Client</label>
          <AsyncSelect cacheOptions defaultOptions loadOptions={promiseOptions} onChange={e => clientChange(e)} />
        </div>

      </div>
      <div className="view-setting">

        <table className='table'>
          <thead>
            <tr>
              <th>#</th>

              <th>Client Name</th>
              {/* <th>Grpah Type</th>
              <th>Entity Level</th>
              <th>Publication Level</th>
              <th>Journlist Level</th>
              <th>City Level</th>
              <th>Keyword Level</th>
              <th>Topic Level</th>
              <th>Spokesperson Level</th>
              <th>Profiling Level</th>
              <th>Visibility Level</th> */}
              <th>Levels</th>
              {/* <th>Print</th>
              <th>Print and Online</th> */}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {settingList?.map((list, index) => (
              <tr  key={index}>
                <td>{index + 1}</td>
                <td>{list.client_name}</td>
                <td>
                {setting.levels?.map((level, indexs) => (
                   <Button key={indexs} className="levelbutton" variant="light">{level.graph_type}</Button>
                ))}
                </td>
                {/* <td>{list.graph_type}</td>
                <td>{list.entity_level === true ? 'Yes' : 'No'}</td>
                <td>{list.publication_level === true ? 'Yes' : 'No'}</td>
                <td>{list.journalist_level === true ? 'Yes' : 'No'}</td>
                <td>{list.city_level === true ? 'Yes' : 'No'}</td>
                <td>{list.keyword_level === true ? 'Yes' : 'No'}</td>
                <td>{list.topic_level === true ? 'Yes' : 'No'}</td>
                <td>{list.spokesperson_level === true ? 'Yes' : 'No'}</td>
                <td>{list.profiling_level === true ? 'Yes' : 'No'}</td>
                <td>{list.visibility_level === true ? 'Yes' : 'No'}</td> */}
                {/* <td>{setting.isOnline === true ? 'Yes' : 'No'}</td>
                <td>{setting.isPrint === true ? 'Yes' : 'No'}</td>
                <td>{setting.isPrintOnline === true ? 'Yes' : 'No'}</td> */}
                <td ><NavLink to={`/edit-setting/${list.client_id}`}><EditIcon /></NavLink> <a href="javascript:void(0)" onClick={e => deleteSetting(list.id)} className='deleicon'><DeleteIcon /></a></td>
              </tr>
            ))}
            {settingList.length === 0 &&
              <tr>
                <td colSpan={13}> No setting found</td>
              </tr>
            }
          </tbody>
        </table>
      </div>


      <Modal show={show} onHide={handleClose}>
        {editMode && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{editData.graph_type}</Modal.Title>
            </Modal.Header>
            <Modal.Body>

              <div className="container ">
                <div className="row">
                  <div className="col-9">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1" checked={editData.entity_level} onChange={e => setEditData({ ...editData, entity_level: e.target.checked })} />
                      <label className="form-check-label" htmlFor="flexCheckDefault1">
                        Entity Level
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked2" checked={editData.publication_level} onChange={e => setEditData({ ...editData, publication_level: e.target.checked })} />
                      <label className="form-check-label" htmlFor="flexCheckChecked2">
                        Publication Level
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault3" checked={editData.journalist_level} onChange={e => setEditData({ ...editData, journalist_level: e.target.checked })} />
                      <label className="form-check-label" htmlFor="flexCheckDefault3">
                        Journlist Level
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked4" checked={editData.city_level} onChange={e => setEditData({ ...editData, city_level: e.target.checked })} />
                      <label className="form-check-label" htmlFor="flexCheckChecked4">
                        City  Level
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked5" checked={editData.keyword_level} onChange={e => setEditData({ ...editData, keyword_level: e.target.checked })} />
                      <label className="form-check-label" htmlFor="flexCheckChecked5">
                        Keyword Level
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked9" checked={editData.topic_level} onChange={e => setEditData({ ...editData, topic_level: e.target.checked })} />
                      <label className="form-check-label" htmlFor="flexCheckChecked9">
                        Topic Level
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked6" checked={editData.spokesperson_level} onChange={e => setEditData({ ...editData, spokesperson_level: e.target.checked })} />
                      <label className="form-check-label" htmlFor="flexCheckChecked6">
                        Spokesperson Level
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked7" checked={editData.profiling_level} onChange={e => setEditData({ ...editData, profiling_level: e.target.checked })} />
                      <label className="form-check-label" htmlFor="flexCheckChecked7">
                        Profiling Level
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked8" checked={editData.visibility_level} onChange={e => setEditData({ ...editData, visibility_level: e.target.checked })} />
                      <label className="form-check-label" htmlFor="flexCheckChecked8">
                        Visibility Level
                      </label>
                    </div>

                  </div>

                </div>
              </div>

            </Modal.Body>
          </>
        )}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveSetting}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>

  )
}

export default ViewSetting

