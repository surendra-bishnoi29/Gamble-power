import React, { useEffect, useState } from 'react'
import Modal from './Modal/Modal'
import Input from './utilities/Input'
import Card from './utilities/Card'
import DateTimePicker from './utilities/DateTimePicker'
import TextArea from './utilities/TextArea'
import moment from "moment/moment";
import ImageInputPills from './utilities/ImageInputPills'
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import axiosInstance from '../Actions/AxiosInstance'
import { ensureUrlSafety, getExtension, removeQueryParameters } from './utilities/utilityFunctions'
import { getPresignedUrl } from '../Actions/UploadFilesActions'
import { createProject, getProjectById,  updateProject } from '../Actions/projectActions'
import Notification from '../Notification';
import { Toaster, ToastIcon, toast, resolveValue } from "react-hot-toast";

function CreateProject(props) {
    const { onClose, message, disabled = false, mode = 'Create', projectId,  toggleReload, setToggleReload  } = props

    const [projectName, setProjectName] = useState('')
    const [address, setAddress] = useState();
    const [projectStartDate, setProjectStartDate] = useState()
    const [projectEndDate, setProjectEndDate] = useState()
    const [description, setDescription] = useState('')
    const [files, setFile] = useState([]);
    const [existingImages, setExistingImages] = useState([]);
    const [newImages, setNewImages] = useState([]);
    const [imagesToDelete, setImagesToDelete] = useState([]);
    const [projectImageId, setProjectImageId] = useState(uuidv4());
    const [error, setError] = useState('')
    const [loading, setLoading ]= useState(true)
    const [pageTitle, setPageTitle] = useState(`${mode} Project`)
    const [dateError, setDateError] = useState('');


    let todayStr = new Date().toISOString().replace(/T.*$/, '')
    console.log("today str", todayStr)


    useEffect(() => {
        // if(mode=='edit')
        // {
        console.log("mode :", mode, "  projectId : ", projectId)
        if(mode == 'Edit')
        {
            getProject();
        }else{
            setLoading(false)
        }
       
        // }
    }, [])

    const getProject = async () => {
        const res = await getProjectById(projectId);
        console.log("project of id", res)
        if( res.status){
            const eve = res.project;
            setProjectName(eve.name);
            setAddress(eve.address);
            setProjectStartDate(eve.start);
            setProjectEndDate(eve.end);
            setDescription(eve.description);
            setExistingImages(eve.images);
            setProjectImageId(eve.projectImagesId)
        }else{
            notification('Unable to find project', 'error')
        }
        setLoading(false)
    }

    const notification = (msg, type) => {
        toast[type](msg);
      }
    // const uploadFile = async (file, url) => {
    //     try {
    //         const res = await fetch(url, {
    //             method: 'PUT',
    //             body: file, // file must be a File or Blob
    //             headers: {
    //                 'Content-Type': file.type || 'application/octet-stream', // Ensure proper Content-Type
    //             },
    //         });

    //         if (!res.ok) {
    //             console.error("File upload failed:", res.statusText);
    //             return false;
    //         }
    //         console.log("File uploaded successfully");
    //         return res;
    //     } catch (error) {
    //         console.error("Error during file upload:", error);
    //         return false;
    //     }
    // };

    const uploadFile = async (file, url) => {

        const res = await fetch(url, { method: 'PUT', body: file });
        console.log(res)

        return res;
    }


    // const handleSubmit = async (e) => {
    //     e.prprojectDefault();
    //     if (mode == 'create') {
    //         const imagesUrl = []
    //         files.map(async (file) => {
    //             let parsed_file_name = ensureUrlSafety(file.name);
    //             let parsed_extension = getExtension(file.name);
    //             const parsed_project_name = ensureUrlSafety(projectName)
    //             const key = `projects/${projectImageId}/images/${parsed_file_name}_${parsed_project_name}.${parsed_extension}`;
    //             const tempUrl = await getPresignedUrl({ key: key });
    //             if (!tempUrl) {
    //                 //raise error
    //             } else {
    //                 const uploadResponse = await uploadFile(file?.file, tempUrl?.url);
    //                 if (uploadResponse.statusText == 'OK') {
    //                     console.log("file uploaded", uploadResponse)
    //                     const fileUrl = removeQueryParameters(uploadResponse?.url);
    //                     console.log("fileUrl", fileUrl)
    //                     imagesUrl.push(fileUrl)
    //                 }
    //             }
    //         })


    //         const Final_project = {
    //             name: projectName,
    //             startDate: projectStartDate,
    //             endDate: projectEndDate,
    //             address: address,
    //             description: description,
    //             images: imagesUrl,
    //             projectImagesId: projectImageId
    //         }

    //         console.log("final project ", Final_project)

    //         const res = await createproject(Final_project);

    //         if (res.status) {
    //             onClose();
    //         } else {
    //             setError(res.error ?? "something went wrong");
    //         }




    //     }











    //     // e.prprojectDefault();
    //     // setInitialprojects((prev) => {
    //     //     return [...prev, {
    //     //         title: projectName,
    //     //         start: todayStr,
    //     //         description: '123',
    //     //         end: '2024-12-25'
    //     //     }]
    //     // })
    //     // onClose()
    // }


    const validateDates = (start, end) => {
        if (moment(end).isBefore(moment(start))) {
            setDateError('End date cannot be earlier than start date.');
            return false;
        }
        setDateError('');
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)

        if (!validateDates(projectStartDate, projectEndDate)) {
            setLoading(false);
            return;
        }


        if (mode === 'Create') {
            const imagesUrl = [];
    
            // Use Promise.all to wait for all async tasks to complete
            await Promise.all(
                files.map(async (file) => {
                    let parsed_file_name = ensureUrlSafety(file.name);
                    let parsed_extension = getExtension(file.name);
                    const parsed_project_name = ensureUrlSafety(projectName);
                    const key = `projects/${projectImageId}/images/${parsed_file_name}_${parsed_project_name}.${parsed_extension}`;
    
                    // Get presigned URL for each file
                    const tempUrl = await getPresignedUrl({ key: key });
    
                    if (!tempUrl) {
                        console.error(`Failed to get presigned URL for ${file.name}`);
                        setError("Failed to upload some images");
                    } else {
                        // Upload the file to S3
                        const uploadResponse = await uploadFile(file?.file, tempUrl?.url);
                        if (uploadResponse.status === 200 || uploadResponse.ok) {
                            console.log("File uploaded successfully:", file.name);
                            const fileUrl = removeQueryParameters(tempUrl.url); // Remove query params to get file URL
                            imagesUrl.push(fileUrl);
                        } else {
                            console.error(`Failed to upload file: ${file.name}`);
                            setError("Failed to upload some images");
                        }
                    }
                })
            );
    
            // Create the final project object after all file uploads are completed
            const Final_project = {
                name: projectName,
                title:projectName,
                start: projectStartDate,
                end: projectEndDate,
                address: address,
                description: description,
                images: imagesUrl, // Contains all the uploaded image URLs
                projectImagesId: projectImageId,
            };
    
            console.log("Final project object:", Final_project);
    
            // Send the project data to the backend
            const res = await createProject(Final_project);
    
            if (res?.status) {
                console.log("Project created successfully");
                onClose();
            } else {
                console.error("Error creating project:", res.error);
                setError(res.error ?? "Something went wrong");
            }
        }

        if(mode == 'Edit'){
            const imagesUrl = [...existingImages];


            await Promise.all(
                files.map(async (file) => {
                    let parsed_file_name = ensureUrlSafety(file.name);
                    let parsed_extension = getExtension(file.name);
                    const parsed_project_name = ensureUrlSafety(projectName);
                    const key = `projects/${projectImageId}/images/${parsed_file_name}_${parsed_project_name}.${parsed_extension}`;
    
                    // Get presigned URL for each file
                    const tempUrl = await getPresignedUrl({ key: key });
    
                    if (!tempUrl) {
                        console.error(`Failed to get presigned URL for ${file.name}`);
                        setError("Failed to upload some images");
                    } else {
                        // Upload the file to S3
                        const uploadResponse = await uploadFile(file?.file, tempUrl?.url);
                        if (uploadResponse.status === 200 || uploadResponse.ok) {
                            console.log("File uploaded successfully:", file.name);
                            const fileUrl = removeQueryParameters(tempUrl.url); // Remove query params to get file URL
                            imagesUrl.push(fileUrl);
                        } else {
                            console.error(`Failed to upload file: ${file.name}`);
                            setError("Failed to upload some images");
                        }
                    }
                })
            );
    
            // Create the final project object after all file uploads are completed
            const Final_project = {
                name: projectName,
                title:projectName,
                start: projectStartDate,
                end: projectEndDate,
                address: address,
                description: description,
                images: imagesUrl, // Contains all the uploaded image URLs
                projectImagesId: projectImageId,
                imageTobeDeleted : imagesToDelete
            };
    
            console.log("Final project object, modify:", Final_project);
    
            // Send the project data to the backend
            const res = await updateProject(projectId, Final_project);
    
            if (res?.status) {
                console.log("Project updated successfully");
                onClose();
            } else {
                console.error("Error updating project:", res.error);
                setError(res.error ?? "Something went wrong");
            }

        }

        setToggleReload(!toggleReload)
        setLoading(false);
    };
    




    const handleFile = (e) => {
        //setMessage("");
        const new_file = e.target.files;
        // console.log("bvcfdghfbvdc", new_file[0].name)
        // setFile([...files, ...new_file])





        const tempFileArray = []
        for (let i = 0; i < new_file.length; i++) {
            console.log("files ::", new_file[i])
            const fileType = new_file[i]['type'];
            const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
            if (validImageTypes.includes(fileType)) {
                let tempFile = {
                    id: i + 'ABC' + Math.floor(Math.random() * 1000),
                    file: new_file[i],
                    isPrimary: false,
                    urlOfFile: URL.createObjectURL(new_file[i]),
                    name: new_file[i]['name'],
                    type: fileType
                }
                if (files.length == 0 && i == 0) {
                    tempFile = { ...tempFile, isPrimary: true }
                }
                tempFileArray.push(tempFile)
                // setFile([...files, tempFile]);
            } else {
                // setMessage("only images accepted");
            }
        }
        setFile([...files, ...tempFileArray]);
    };


    const imagePillRemove = (file, existing = false) => {
        if (existing) {
                setImagesToDelete((p)=>[...p, file]);
                setExistingImages(existingImages.filter((d1) => { return !(d1==file) }));

        } 
        setFile(files.filter((d1) => { return !(d1?.id == file?.id) }).map((p1, index) => {
            if (file.isPrimary && index == 0) {
                return { ...p1, isPrimary: true }
            }
            return p1
        })
        );
        

    }

    




    return (
        <Modal>

            <Card header={pageTitle} close={onClose}>
                {message ? <div className=" p-5 text-center w-[300px]"> {message}</div> :
                    <form onSubmit={handleSubmit}>
                        {/* <div class="flex flex-wrap justify-center">
                    <div class=" w-28">
                        <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png" alt="..." class="shadow-lg rounded-full max-w-full h-auto align-middle border-none" />
                    </div>
                </div> */}

                        {/* <div>
                                <UploadImage image={image} handleFile={handleFile} disabled={disabled} />
                            </div> */}
                        <div className=" flex  space-x-2 mt-3">
                            <Input id='Project Name' value={projectName} onChange={setProjectName} disabled={disabled} required={true} />
                            {/* <Input id='Organisation' value={organisation} onChange={setOrganisation} disabled={disabled} required={false} /> */}
                        </div>
                        <div className=" flex gap-2 w-1/2 mt-3">
                            <div className=" w-full">
                                <DateTimePicker
                                    onChange={(val) => {
                                        const parsedDate = moment(val, 'YYYY-MM-DD'); // Parse date from DateTimePicker
                                        if (parsedDate.isValid()) {
                                            setProjectStartDate(parsedDate.format('YYYY-MM-DD')); // Set consistent format
                                        }
                                    }}
                                    value={projectStartDate ? moment(projectStartDate, 'YYYY-MM-DD').format('YYYY-MM-DD') : ''}
                                     label={"Start Date"}
                                     required={true}
                                />
                            </div>
                            <div className=" w-full">
                                <DateTimePicker
                                    onChange={(val) => {
                                        const parsedDate = moment(val, 'YYYY-MM-DD'); // Parse date from DateTimePicker
                                        if (parsedDate.isValid()) {
                                            setProjectEndDate(parsedDate.format('YYYY-MM-DD')); // Set consistent format
                                        }
                                    }}
                                    value={projectEndDate ? moment(projectEndDate, 'YYYY-MM-DD').format('YYYY-MM-DD') : ''}
                                    label={"End Date"}
                                    required={true}
                                />
                            </div>
                        </div>
                        {dateError && <div className=' text-[12px] text-red-500'>*Error: {dateError}</div>}
                        {/* <div className=" flex space-x-2 mt-3">
                                <Input id='Mobile' value={mobile} onChange={setMobile} disabled={disabled} required={true} />
                                <Input id='Email' value={email} onChange={setEmail} disabled={disabled} required={false} />
                            </div> */}
                        <div className=" flex space-x-2 mt-3">
                            <TextArea id='Address' value={address} onChange={setAddress} disabled={disabled} required={true} />
                        </div>
                        <div className=" flex space-x-2 mt-3">
                            <TextArea id='Description' value={description} onChange={setDescription} disabled={disabled} required={true} />
                        </div>

                        <div className=" flex space-x-2 mt-3 w-full">
                            <ImageInputPills handleFile={handleFile} files={files} imagePillRemove={imagePillRemove} existingImages={existingImages} />
                        </div>
                        {/* <div className=" flex space-x-2 mt-3">

                            <Input id='City' value={city} onChange={setCity} disabled={disabled} required={true} />
                            <Input id='District' value={district} onChange={setDistrict} disabled={disabled} required={true} />
                        </div>
                        <div className=" flex space-x-2 mt-3">

                            <Input id='State' value={state} onChange={setState} disabled={disabled} required={true} />
                            <Input id='Client Type' value={clientType} onChange={setClientType} disabled={disabled} required={false} />
                        </div>
                        <div className=" flex items-center space-x-2 mt-3 ">
                            <SelectValues id='User Role' items={["Admin", "User"]} label={'Role'} setSelectedItem={setRole} selectedItem={role} />
                            <Input id='Password' value={password} onChange={setPassword} disabled={disabled} required={true} />
                        </div> */}
                        <div className="flex justify-center mt-5">
                            {mode == 'view' ? "" : <button type="submit" className="bg-blue-500 disabled:bg-blue-300 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded" disabled={(loading ||disabled)? true: false} >Submit</button>}
                        </div>
                    </form>
                }
            </Card>

        </Modal>
    )
}

export default CreateProject