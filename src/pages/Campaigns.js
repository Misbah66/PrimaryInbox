import React, { useState, useRef, useEffect  } from 'react';
import { ChevronDown, Plus, PlusIcon } from 'lucide-react';
import { FaChevronDown, FaPlus } from 'react-icons/fa';

import Sidebar from '../components/Sidebar'; // Import the Sidebar component

// Import custom icons as images
import RenameIcon from '../assets/rename.png';
import ClientInfoIcon from '../assets/update.png';
import AssignTagIcon from '../assets/tag.png';
import CloneIcon from '../assets/clone.png';
import ArchiveIcon from '../assets/archive.png';
import DeleteIcon from '../assets/delete.png';

import PauseIcon from '../assets/pause.png';

import AllStatusIcon from '../assets/all-status.png';
import ActiveIcon from '../assets/active.png';
import DraftIcon from '../assets/draft.png';
import ErrorIcon from '../assets/error.png';
import CompletedIcon from '../assets/completed.png';
import EverGreenIcon from '../assets/ever-green.png';
import dropdown from '../assets/dropdown.png';

import closeIcon from '../assets/close.png';
import Layout from '../layout';
import plusIcon from '../assets/plus-button.png';
import addIcon from '../assets/add-button.png';
import removeIcon from '../assets/remove-button.png';
import orangeTagIcon from '../assets/orange-tag.png';
import purpleTagIcon from '../assets/purple-tag.png';
import cyanTagIcon from '../assets/cyan-tag.png';
import greenTagIcon from '../assets/green-tag.png';
import blueTagIcon from '../assets/blue-tag.png';

// CircularProgress Component import tick from '../assets/tick.png';import EditIcon from '../assets/edit.png'; import play from '../assets/play.png';

const CircularProgress = ({ progress }) => (
  <div className="relative w-12 h-12">
    <svg className="w-full h-full" viewBox="0 0 100 100">
      <circle
        className="text-purple-100 stroke-current"
        strokeWidth="8"
        cx="50"
        cy="50"
        r="46"
        fill="transparent"
      ></circle>
      <circle
        className="text-purple-600 progress-ring stroke-current"
        strokeWidth="8"
        strokeLinecap="round"
        cx="50"
        cy="50"
        r="46"
        fill="transparent"
        strokeDasharray={`${progress * 2.89} 289`}
        strokeDashoffset="0"
        transform="rotate(-90 50 50)"
      ></circle>
    </svg>
    <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-purple-700">
      {progress}%
    </span>
  </div>
);

// FilterPopup Component
const FilterPopup = () => {
  return (
    <div className="absolute right-0 top-full mt-2 w-96 bg-white shadow-lg rounded-lg p-4 z-10">
      <div className="grid grid-cols-3 gap-4">
        <button className="flex items-center justify-center py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50">
          <img src={AllStatusIcon} alt="All Status" className="h-5 w-5 mr-2" />
          All Status
        </button>
        <button className="flex items-center justify-center py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50">
          <img src={ActiveIcon} alt="Active" className="h-5 w-5 mr-2" />
          Active
        </button>
        <button className="flex items-center justify-center py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50">
          <img src={DraftIcon} alt="Draft" className="h-5 w-5 mr-2" />
          Draft
        </button>
        <button className="flex items-center justify-center py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50">
          <img src={PauseIcon} alt="Pause" className="h-5 w-5 mr-2" />
          Pause
        </button>
        <button className="flex items-center justify-center py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50">
          <img src={ErrorIcon} alt="Error" className="h-5 w-5 mr-2" />
          Error
        </button>
        <button className="flex items-center justify-center py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50">
          <img src={CompletedIcon} alt="Completed" className="h-5 w-5 mr-2" />
          Completed
        </button>
        <button className="flex items-center justify-center py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 col-span-3">
          <img src={EverGreenIcon} alt="Ever Green" className="h-5 w-5 mr-2" />
          Ever Green
        </button>
        <button className="mt-4 flex items-center justify-center w-full py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 col-span-3">
          Apply
        </button>
      </div>
    </div>
  );
};

// SortPopup Component
const SortPopup = () => {
  return (
    <div className="absolute right-0 top-full mt-2 w-96 bg-white shadow-lg rounded-lg p-4 z-10">
      <div className="grid grid-cols-2 gap-4">
        <button className="flex items-center justify-center py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50">
          Newest First
        </button>
        <button className="flex items-center justify-center py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50">
          Oldest First
        </button>
        <button className="flex items-center justify-center py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50">
          A-Z (Name)
        </button>
        <button className="flex items-center justify-center py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50">
          Z-A (Name)
        </button>
        <button className="mt-4 flex items-center justify-center w-full py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 col-span-2">
          Apply
        </button>
      </div>
    </div>
  );
};

// DeleteConfirmationPopup Component
const DeleteConfirmationPopup = ({ onCancel, onConfirm }) => (
  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
    <div className="bg-white rounded-lg p-6 w-80">
      <h2 className="text-xl font-bold mb-4">Delete</h2>
      <p className="mb-4">Are you sure you want to delete?</p>
      <div className="flex justify-end space-x-4">
        <button onClick={onCancel} className="bg-gray-200 px-4 py-2 rounded-lg">Cancel</button>
        <button onClick={onConfirm} className="bg-red-500 text-white px-4 py-2 rounded-lg">Delete</button>
      </div>
    </div>
  </div>
);
 
// RenameCampaignPopup Component
const RenameCampaignPopup = ({ currentName, onCancel, onConfirm }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
    <div className="bg-white rounded-lg p-8 shadow-lg" style={{
      width: '618px',
      height: '277px',
      padding: '32px',
      borderRadius: '32px 32px 32px 32px',
      boxShadow: '1px 10px 25px 0px rgba(3, 2, 41, 0.07)'
    }}>
      <h2 className="text-xl font-bold mb-4 flex items-center">
        Rename Campaign
      </h2>
      <div className="relative mb-8">
        <input
          type="text"
          defaultValue={currentName}
          className="w-full p-3 border rounded-full pl-12"
          style={{ height: '52px' }}
        />
        <div className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full" style={{
          width: '36px',
          height: '36px',
          padding: '6.47px 5.76px 7.03px 7.74px',
          borderRadius: '100px 100px 100px 100px',
          backgroundColor: '#F2F2F7'
        }}>
          <img
            src={RenameIcon}
            alt="Icon"
            className="h-5 w-5"
          />
        </div>
      </div>
      <div className="flex justify-between gap-10">
        <button onClick={onCancel} className="border px-6 py-3 rounded-full text-gray-700" style={{
          width: '259px',
          height: '52px',
          borderRadius: '60px'
        }}>Cancel</button>
        <button onClick={onConfirm} className="text-white px-6 py-3 rounded-full" style={{
          backgroundColor: 'var(--Blue-500, #684FFF)',
          width: '259px',
          height: '52px',
          borderRadius: '60px'
        }}>Rename</button>
      </div>
    </div>
  </div>
);

// UpdateClientPopup Component

const UpdateClientPopup = ({ onCancel, onConfirm }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedClient, setSelectedClient] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleClientSelect = (client) => {
    setSelectedClient(client);
    setShowDropdown(false);
  };

  const handleClearInput = () => {
    setSelectedClient('');
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-8 shadow-lg" style={{
        width: '658px',
        height: '329px',
        padding: '32px',
        borderRadius: '32px',
        boxShadow: '1px 10px 25px 0px rgba(3, 2, 41, 0.07)'
      }}>
        <h2 className="text-xl font-bold mb-4">Add Client</h2>
        <div className="relative mb-4">
          <input
            className="w-full p-3 border rounded-full w-full p-2 pr-8 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#684FFF]"
            style={{
              height: '44px',
              fontSize: '14px',
              paddingLeft: '16px', // Adjust padding to align text to the left
              paddingRight: '50px' // Adjust padding to prevent overlap with icons
            }}
            value={selectedClient}
            readOnly
            placeholder="Please Select Client"
            onClick={handleDropdownClick}
          />
          {selectedClient && (
            <div
              className="absolute right-16 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={handleClearInput}
              style={{
                background: '#E3C7FF',
                borderRadius: '100px',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <img src={closeIcon} alt="Close Icon" className="h-5 w-5" />
            </div>
          )}
          <div
            className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
            style={{
              background: '#684FFF',
              borderRadius: '100px',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onClick={handleDropdownClick}
          >
            <img src={dropdown} alt="Dropdown Icon" className="h-4 w-4" />
          </div>
          {showDropdown && (
            <div className="absolute mt-1 w-full rounded-lg bg-white shadow-lg z-10" style={{
              width: '594px',
              maxHeight: '464px',
              padding: '8px 0px 8px 0px',
              gap: '2px',
              borderRadius: '16px 0px 0px 0px',
              overflowY: 'auto'
            }}>
              <ul className="py-1">
                {['Jeremey-Beatrice27@yahoo.com', 'Jeremey-Mustafa.Torphy34@yahoo.com', 'Layne_Osinski@gmail.com', 'Shaniya_Mraz97@hotmail.com', 'Myrtie_Harris4@gmail.com', 'Murphy_Ullrich37@hotmail.com', 'Benny_Haley@hotmail.com', 'Rosa_Fadel51@gmail.com', 'Donald_Bruen72@yahoo.com'].map(client => (
                  <li key={client}
                      className="px-4 py-2 cursor-pointer hover:text-white hover:bg-indigo-500"
                      onClick={() => handleClientSelect(client)}>
                    {client}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="prevent-leads"
            className="hidden"
            onChange={handleCheckboxChange}
          />
          <label
            htmlFor="prevent-leads"
            className="relative flex items-center cursor-pointer"
          >
            <span
              className={`block w-6 h-6 rounded-full border border focus:outline-none focus:ring-2 focus:ring-purple-500 ${isChecked ? 'bg-indigo-600' : 'bg-gray-100'}`}
            >
              {isChecked && (
                <span className="absolute left-0 top-0 w-6 h-6 flex items-center justify-center text-white">
                  &#10003;
                </span>
              )}
            </span>
            <span className="ml-2 text-gray-700">Prevent leads from being contacted using the client's global block list.</span>
          </label>
        </div>
        <div className="flex justify-between gap-10">
          <button onClick={onCancel} className="px-6 py-3 rounded-full text-gray-700 border" style={{
            width: '259px',
            height: '52px',
            borderRadius: '60px',
            backgroundColor: 'white'
          }}>Cancel</button>
          <button onClick={onConfirm} className="text-white px-6 py-3 rounded-full" style={{
            width: '259px',
            height: '52px',
            borderRadius: '60px',
            backgroundColor: '#684FFF'
          }}>Save</button>
        </div>
      </div>
    </div>
  );
};

// AssignTagPopup Component 


const ChevronIcon = ({ className }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TagIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 6C3 4.34315 4.34315 3 6 3H14.1716C14.9672 3 15.7303 3.31607 16.2929 3.87868L20.1213 7.70711C20.6839 8.26972 21 9.03278 21 9.82843V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6Z" stroke="#5856D6" strokeWidth="2"/>
  </svg>
);

const getTagIcon = (name, color) => {
  if (name === 'Nouvi') return purpleTagIcon;
  switch (color) {
    case '#FF9800': return orangeTagIcon;
    case '#5856D6': return purpleTagIcon;
    case '#00BCD4': return cyanTagIcon;
    case '#4CAF50': return greenTagIcon;
    default: return orangeTagIcon;
  }
};

const CreateTagPopup = ({ onClose, onCreateTag }) => {
  const [tagName, setTagName] = useState('');

  const handleCreate = () => {
    if (tagName.trim()) {
      onCreateTag(tagName.trim());
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white shadow-lg" style={{
        width: '618px',
        height: '268px',
        padding: '32px 32px 32px 32px',
        borderRadius: '32px 32px 32px 32px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
        <h2 className="text-2xl font-semibold text-gray-800">Create Tag</h2>
        <div className="flex-grow">
          <div className="flex items-center border-2 border-gray-300 rounded-full p-3">
            <TagIcon />
            <input
              type="text"
              placeholder="Create Campaign Tag"
              value={tagName}
              onChange={(e) => setTagName(e.target.value)}
              className="ml-2 outline-none flex-1"
            />
          </div>
        </div>
        <div className="flex justify-between gap-4 pb-8">
          <button
            onClick={onClose}
            className="flex-1 py-3 px-4 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-colors duration-200"
          >
            Cancel
          </button>
          <button
            onClick={handleCreate}
            className="flex-1 py-3 px-4 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors duration-200"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

const AssignTagPopup = ({ onCancel, onSave }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [showCreateTagPopup, setShowCreateTagPopup] = useState(false);
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);
  const [dropdownWidth, setDropdownWidth] = useState(0);

  const [tags, setTags] = useState([
    { name: 'Warm Up - Ramp Up', color: '#FF9800' },
    { name: 'Nouvi', color: '#5856D6' },
    { name: 'Warm up -Attivo', color: '#00BCD4' },
    { name: 'Nouvi', color: '#5856D6' },
    { name: 'Warm', color: '#4CAF50' },
    { name: 'Warm-up', color: '#00BCD4' }
  ]);

  const handleTagSelect = (tag) => {
    if (!selectedTags.some(t => t.name === tag.name)) {
      setSelectedTags([...selectedTags, tag]);
    }
    setShowDropdown(false);
  };

  const handleTagRemove = (tagToRemove) => {
    setSelectedTags(selectedTags.filter(tag => tag.name !== tagToRemove.name));
  };

  const handleCreateTag = (newTagName) => {
    const newTag = { name: newTagName, color: '#5856D6' }; // Default color
    setTags([...tags, newTag]);
    handleTagSelect(newTag);
  };

  useEffect(() => {
    if (inputRef.current) {
      setDropdownWidth(inputRef.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) &&
          inputRef.current && !inputRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-40">
      <div className="bg-white rounded-3xl shadow-lg relative" style={{
        width: '618px',
        padding: '32px',
        fontFamily: 'Poppins, sans-serif',
      }}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Assign Tag</h2>
          <button 
            className="flex items-center text-indigo-600 hover:text-indigo-800"
            onClick={() => setShowCreateTagPopup(true)}
          >
            <span className="mr-1 text-sm font-medium">Create Tag</span>
            <img src={plusIcon} alt="Create" className="w-5 h-5" />
          </button>
        </div>
        <div className="relative mb-6">
          <div 
            ref={inputRef}
            className="w-full p-3 border-2 border-indigo-600 rounded-full text-gray-700 text-lg flex items-center cursor-pointer"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <span className="text-gray-400">Select Tag or Create Tag</span>
          </div>
          <div
            className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer bg-indigo-600 rounded-full w-10 h-10 flex items-center justify-center"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <ChevronIcon className={`text-white transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`} />
          </div>
          {showDropdown && (
            <div 
              ref={dropdownRef}
              className="absolute left-0 mt-2 bg-white rounded-2xl shadow-lg z-10"
              style={{ width: `${dropdownWidth}px` }}
            >
              <div className="bg-gray-50 p-4 rounded-2xl">
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <button
                      key={index}
                      onClick={() => handleTagSelect(tag)}
                      className="flex items-center justify-between px-4 py-2 rounded-full bg-white hover:bg-indigo-50 transition-colors duration-200"
                      style={{ boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)' }}
                    >
                      <span className="flex items-center">
                        <img src={getTagIcon(tag.name, tag.color)} alt="Tag" className="w-6 h-6 mr-2" />
                        <span className="text-sm">{tag.name}</span>
                      </span>
                      <img src={plusIcon} alt="Add" className="w-5 h-5 ml-2" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        {selectedTags.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Selected Tag</h3>
            <div className="flex flex-wrap gap-2">
              {selectedTags.map((tag, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between px-4 py-2 rounded-full bg-gray-100"
                >
                  <span className="flex items-center">
                    <img src={getTagIcon(tag.name, tag.color)} alt="Tag" className="w-6 h-6 mr-2" />
                    <span className="text-sm">{tag.name}</span>
                  </span>
                  <button 
                    onClick={() => handleTagRemove(tag)}
                    className="ml-2 bg-red-500 rounded-full w-6 h-6 flex items-center justify-center text-white font-bold"
                  >
                    -
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="flex justify-between gap-4 mt-6">
          <button
            onClick={onCancel}
            className="flex-1 py-3 px-4 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-colors duration-200"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave(selectedTags)}
            className="flex-1 py-3 px-4 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors duration-200"
          >
            Save
          </button>
        </div>
      </div>
      {showCreateTagPopup && (
        <CreateTagPopup
          onClose={() => setShowCreateTagPopup(false)}
          onCreateTag={handleCreateTag}
        />
      )}
    </div>
  );
};
// ActionPopup Component
const ActionPopup = ({ onRenameClick, onUpdateClick, onDeleteClick, onAssignClick }) => {
  return (
    <div className="absolute right-0 mt-2 w-60 bg-white shadow-lg rounded-lg p-4 z-10">
      <button className="flex items-center justify-start w-full py-2 text-gray-700 hover:bg-gray-50" onClick={onRenameClick}>
        <img src={RenameIcon} alt="Rename" className="h-5 w-5 mr-1" />
        Rename Campaign
      </button>
      <button className="flex items-center justify-start w-full py-2 text-gray-700 hover:bg-gray-50" onClick={onUpdateClick}>
        <img src={ClientInfoIcon} alt="Update" className="h-5 w-5 " />
        Update Client Information
      </button>
      <button className="flex items-center justify-start w-full py-2 text-gray-700 hover:bg-gray-50" onClick={onAssignClick}>
        <img src={AssignTagIcon} alt="Tag" className="h-5 w-5 mr-2" />
        Assign Tag
      </button>
      <button className="flex items-center justify-start w-full py-2 text-gray-700 hover:bg-gray-50">
        <img src={CloneIcon} alt="Clone" className="h-5 w-5 mr-2" />
        Clone Campaign
      </button>
      <button className="flex items-center justify-start w-full py-2 text-gray-700 hover:bg-gray-50">
        <img src={ArchiveIcon} alt="Archive" className="h-5 w-5 mr-2" />
        Archive Campaign
      </button>
      <button className="flex items-center justify-start w-full py-2 text-red-600 hover:bg-gray-50" onClick={onDeleteClick}>
        <img src={DeleteIcon} alt="Delete" className="h-5 w-5 mr-2" />
        Delete Campaign
      </button>
    </div>
  );
};

// CampaignRow Component
const CampaignRow = ({ campaign, index, onRename, onUpdate, onDelete, onAssign }) => {
  const [isActionPopupOpen, setActionPopupOpen] = useState(false);

  const getStatusStyle = (status) => {
    const styles = {
      'Active': 'bg-blue-500 text-white',
      'Completed': 'bg-green-500 text-white',
      'Pause': 'bg-orange-400 text-white',
      'Draft': 'bg-gray-800 text-white',
      'Error': 'bg-red-500 text-white'
    };
    return styles[status] || 'bg-gray-500 text-white';
  };

  return (
    <div className="relative flex items-center py-4 px-6 bg-white shadow-sm rounded-lg mb-3">
      <div className="w-12 text-center text-gray-500 font-medium">{index}</div>
      <div className="flex-1">
        <div className="text-sm font-medium text-gray-900">{campaign.name}</div>
        <div className="text-xs text-gray-400">{campaign.createdAt}</div>
      </div>
      <div className="w-28 flex justify-center">
        <CircularProgress progress={campaign.progress} />
      </div>
      <div className="w-28 text-center text-sm">{campaign.outcomes}</div>
      <div className="w-24 text-center text-sm">{campaign.sent}</div>
      <div className="w-24 text-center text-sm text-blue-600">{campaign.clicks}</div>
      <div className="w-28 text-center text-sm">{campaign.replied}</div>
      <div className="w-28 text-center">
        <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusStyle(campaign.status)}`}>
          {campaign.status}
        </span>
      </div>
      <div className="relative w-28 flex justify-end space-x-2">
        <button className="text-gray-400 hover:text-gray-600" onClick={() => setActionPopupOpen(!isActionPopupOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </button>
        {isActionPopupOpen && (
          <ActionPopup
            onRenameClick={() => {
              setActionPopupOpen(false);
              onRename(campaign.name);
            }}
            onUpdateClick={() => {
              setActionPopupOpen(false);
              onUpdate();
            }}
            onDeleteClick={() => {
              setActionPopupOpen(false);
              onDelete(campaign.name);
            }}
            onAssignClick={() => {
              setActionPopupOpen(false);
              onAssign();
            }}
          />
        )}
      </div>
    </div>
  );
};

// CampaignDashboard Component
const CampaignDashboard = () => {
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [isSortOpen, setSortOpen] = useState(false);
 
  const [campaigns] = useState([
    { name: '2nd Campaign HC Leads No Response', createdAt: 'Created At: 08 Nov, 10:45 Am', progress: 25, outcomes: '-', sent: 200, clicks: 142, replied: '157(0.5%)', status: 'Active' },
    { name: '2nd Campaign HC Leads No Response', createdAt: 'Created At: 08 Nov, 10:45 Am', progress: 100, outcomes: 'NA', sent: 200, clicks: 142, replied: '157(0.5%)', status: 'Completed' },
    { name: '2nd Campaign HC Leads No Response', createdAt: 'Created At: 08 Nov, 10:45 Am', progress: 25, outcomes: 'NA', sent: 200, clicks: 142, replied: '157(0.5%)', status: 'Pause' },
    { name: '2nd Campaign HC Leads No Response', createdAt: 'Created At: 08 Nov, 10:45 Am', progress: 0, outcomes: '-', sent: '-', clicks: '-', replied: '-', status: 'Draft' },
    { name: '2nd Campaign HC Leads No Response', createdAt: 'Created At: 08 Nov, 10:45 Am', progress: 25, outcomes: 'NA', sent: 200, clicks: 142, replied: '157(0.5%)', status: 'Error' },
    { name: '2nd Campaign HC Leads No Response', createdAt: 'Created At: 08 Nov, 10:45 Am', progress: 25, outcomes: '-', sent: 200, clicks: 142, replied: '157(0.5%)', status: 'Active' },
    { name: '2nd Campaign HC Leads No Response', createdAt: 'Created At: 08 Nov, 10:45 Am', progress: 25, outcomes: 'NA', sent: 200, clicks: 142, replied: '157(0.5%)', status: 'Pause' },
    { name: '2nd Campaign HC Leads No Response', createdAt: 'Created At: 08 Nov, 10:45 Am', progress: 25, outcomes: '-', sent: 200, clicks: 142, replied: '157(0.5%)', status: 'Active' },
  ]);

  const [selectedCampaignName, setSelectedCampaignName] = useState('');
  const [isRenamePopupOpen, setRenamePopupOpen] = useState(false);
  const [isDeletePopupOpen, setDeletePopupOpen] = useState(false);
  const [isUpdatePopupOpen, setUpdatePopupOpen] = useState(false);
  const [isAssignPopupOpen, setAssignPopupOpen] = useState(false);

  const handleRename = (campaignName) => {
    setSelectedCampaignName(campaignName);
    setRenamePopupOpen(true);
  };

  const handleDelete = (campaignName) => {
    setSelectedCampaignName(campaignName);
    setDeletePopupOpen(true);
  };

  const handleUpdate = () => {
    setUpdatePopupOpen(true);
  };

  const handleAssign = () => {
    setAssignPopupOpen(true);
  };

  return (
<Layout>
        <div className="flex justify-between   items-center mb-6">
          <h2 className="text-3xl font-bold">Campaigns</h2>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Campaigns"
                className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
            </div>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              + Add New
            </button>
          </div>
        </div>
       
        <div className="relative flex justify-end space-x-2 mb-6 rounded-lg">
          <button
            className="px-4 py-2 text-sm bg-white border border-gray-300 rounded-full hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent flex items-center"
            onClick={() => setFilterOpen(!isFilterOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Filter
          </button>
          <button
            className="px-4 py-2 text-sm bg-white border border-gray-300 rounded-full hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent flex items-center"
            onClick={() => setSortOpen(!isSortOpen)}
          >
            Newest First
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isFilterOpen && <FilterPopup />}
          {isSortOpen && <SortPopup />}
        </div>
       <div className="bg-white shadow rounded-lg overflow-hidden mb-6">
          <div className="flex text-xs font-medium text-gray-500 bg-gray-50 py-4 px-6">
            <div className="w-12"></div>
            <div className="flex-1">NAME</div>
            <div className="w-28 text-center">PROGRESS</div>
            <div className="w-28 text-center">OUTCOMES</div>
            <div className="w-24 text-center">SENT</div>
            <div className="w-24 text-center">CLICKS</div>
            <div className="w-28 text-center">REPLIED</div>
            <div className="w-28 text-center">STATUS</div>
            <div className="w-28 text-center">ACTIONS</div>
          </div>
        </div>
       
        <div className="space-y-3">
          {campaigns.map((campaign, index) => (
            <CampaignRow
              key={index}
              campaign={campaign}
              index={index + 1}
              onRename={handleRename}
              onUpdate={handleUpdate}
              onAssign={handleAssign}
              onDelete={handleDelete}
            />
          ))}
        </div>
 
        {isRenamePopupOpen && (
          <RenameCampaignPopup
            currentName={selectedCampaignName}
            onCancel={() => setRenamePopupOpen(false)}
            onConfirm={() => {
              // Handle rename logic here
              setRenamePopupOpen(false);
            }}
          />
        )}
 
        {isDeletePopupOpen && (
          <DeleteConfirmationPopup
            onCancel={() => setDeletePopupOpen(false)}
            onConfirm={() => {
              // Handle delete logic here
              setDeletePopupOpen(false);
            }}
          />
        )}
 
        {isUpdatePopupOpen && (
          <UpdateClientPopup
            onCancel={() => setUpdatePopupOpen(false)}
            onConfirm={() => {
              // Handle update logic here
              setUpdatePopupOpen(false);
            }}
          />
        )}

        
       {isAssignPopupOpen && (
          <AssignTagPopup
            onCancel={() => setAssignPopupOpen(false)}
            onSave={() => {
              // Handle assign logic here
              setAssignPopupOpen(false);
            }}
          />
        )}
     </Layout>
  );
};

export default CampaignDashboard;