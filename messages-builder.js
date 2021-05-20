import { defineMessages } from 'react-intl';

/* eslint-disable max-len */

/**
 * Define all the messages existings on the app to translate.
 */
export const messages = defineMessages({
	GENERAL_CANCEL_LABEL: {
		id: 'GENERAL_CANCEL_LABEL',
		description: 'Cancel',
		defaultMessage: 'Cancel'
	},
	GENERAL_CREATE_LABEL: {
		id: 'GENERAL_CREATE_LABEL',
		description: 'Generic label for create actions',
		defaultMessage: 'Create',
	},
	GENERAL_DELETE_LABEL: {
		id: 'GENERAL_DELETE_LABEL',
		description: 'Delete',
		defaultMessage: 'Delete'
	},
	GENERAL_NOTE_LABEL: {
		id: 'GENERAL_NOTE_LABEL',
		description: 'Note',
		defaultMessage: 'Note:'
	},
	GENERAL_REMOVE_LABEL: {
		id: 'GENERAL_REMOVE_LABEL',
		description: 'Remove',
		defaultMessage: 'Remove'
	},
	GENERAL_SAVE_LABEL: {
		id: 'GENERAL_SAVE_LABEL',
		description: 'Save',
		defaultMessage: 'Save'
	},
	GENERAL_SAVE_LABEL_ACTIVE: {
		id: 'GENERAL_SAVE_LABEL_ACTIVE',
		description: 'Saving... This may take awhile',
		defaultMessage: 'Saving... This may take a while.'
	},
	GENERAL_SEARCH_PLACEHOLDER: {
		id: 'GENERAL_SEARCH_PLACEHOLDER',
		description: 'Generic placeholder text for a searchbar',
		defaultMessage: 'Search...'
	},
	GENERAL_SUBMIT_LABEL: {
		id: 'GENERAL_SUBMIT_LABEL',
		description: 'Submit',
		defaultMessage: 'Submit'
	},
	GENERAL_FIELD_OPTION_NONE: {
		id: 'GENERAL_FIELD_OPTION_NONE',
		description: 'The field option label for "none" options',
		defaultMessage: '-- None --'
	},
	GENERAL_FIELD_TYPE_CHECKBOXES: {
		id: 'GENERAL_FIELD_TYPE_CHECKBOXES',
		description: 'The user friendly text for the "Checkboxes" field type',
		defaultMessage: 'Checkboxes'
	},
	GENERAL_FIELD_TYPE_EMAIL: {
		id: 'GENERAL_FIELD_TYPE_EMAIL',
		description: 'The user friendly text for the "Email" field type',
		defaultMessage: 'Email'
	},
	GENERAL_FIELD_TYPE_NUMBER: {
		id: 'GENERAL_FIELD_TYPE_NUMBER',
		description: 'The user friendly text for the "Number" field type',
		defaultMessage: 'Number'
	},
	GENERAL_FIELD_TYPE_RADIO: {
		id: 'GENERAL_FIELD_TYPE_RADIO',
		description: 'The user friendly text for the "Radio" field type',
		defaultMessage: 'Multiple Choice'
	},
	GENERAL_FIELD_TYPE_SELECT: {
		id: 'GENERAL_FIELD_TYPE_SELECT',
		description: 'The user friendly text for the "Select" field type',
		defaultMessage: 'Dropdown'
	},
	GENERAL_FIELD_TYPE_TEXT: {
		id: 'GENERAL_FIELD_TYPE_TEXT',
		description: 'The user friendly text for the "Text" field type',
		defaultMessage: 'Short Answer'
	},
	GENERAL_FIELD_TYPE_TEXTAREA: {
		id: 'GENERAL_FIELD_TYPE_TEXTAREA',
		description: 'The user friendly text for the "TextArea" field type',
		defaultMessage: 'Paragraph'
	},
	GENERAL_FORM_ERROR_REQUIRED: {
		id: 'GENERAL_FORM_ERROR_REQUIRED',
		description: 'Generic error for field required form validation',
		defaultMessage: 'This field is required.'
	},
	GENERAL_TEXT_NOT_ACTIVE: {
		id: 'GENERAL_TEXT_NOT_ACTIVE',
		description: 'Message to display for no last activity',
		defaultMessage: 'Not active'
	},
	GENERAL_TEXT_LRS_ACTION_ATTENDED: {
		id: 'GENERAL_TEXT_LRS_ACTION_ATTENDED',
		description: 'LRS action word for "attended"',
		defaultMessage: 'attended'
	},
	GENERAL_TEXT_LRS_ACTION_ATTENDING: {
		id: 'GENERAL_TEXT_LRS_ACTION_ATTENDING',
		description: 'LRS action word for "attending"',
		defaultMessage: 'attending'
	},
	GENERAL_TEXT_LRS_ACTION_ATTEND: {
		id: 'GENERAL_TEXT_LRS_ACTION_ATTEND',
		decription: 'LRS action word for "attend"',
		defaultMessage: 'attend'
	},
	GENERAL_TEXT_LRS_ACTION_CLICKED: {
		id: 'GENERAL_TEXT_LRS_ACTION_CLICKED',
		description: 'LRS action word for "clicked"',
		defaultMessage: 'clicked'
	},
	GENERAL_TEXT_LRS_ACTION_CLICKING: {
		id: 'GENERAL_TEXT_LRS_ACTION_CLICKING',
		description: 'LRS action word for "clicking"',
		defaultMessage: 'clicking'
	},
	GENERAL_TEXT_LRS_ACTION_CLICK: {
	    id: 'GENERAL_TEXT_LRS_ACTION_CLICK',
	    decription: 'LRS action word for "click"',
	    defaultMessage: 'click'
	  },
	GENERAL_TEXT_LRS_ACTION_COMPLETED: {
		id: 'GENERAL_TEXT_LRS_ACTION_COMPLETED',
		description: 'LRS action word for "completed"',
		defaultMessage: 'completed'
	},
	GENERAL_TEXT_LRS_ACTION_COMPLETING: {
		id: 'GENERAL_TEXT_LRS_ACTION_COMPLETING',
		description: 'LRS action word for "completing"',
		defaultMessage: 'completing'
	},
	GENERAL_TEXT_LRS_ACTION_COMPLETE: {
		id: 'GENERAL_TEXT_LRS_ACTION_COMPLETE',
		decription: 'LRS action word for "complete"',
		defaultMessage: 'complete'
	},
	GENERAL_TEXT_LRS_ACTION_CREATED: {
		id: 'GENERAL_TEXT_LRS_ACTION_CREATED',
		description: 'LRS action word for "created"',
		defaultMessage: 'created'
	},
	GENERAL_TEXT_LRS_ACTION_CREATING: {
		id: 'GENERAL_TEXT_LRS_ACTION_CREATING',
		description: 'LRS action word for "creating"',
		defaultMessage: 'creating'
	},
	GENERAL_TEXT_LRS_ACTION_CREATE: {
		id: 'GENERAL_TEXT_LRS_ACTION_CREATE',
		decription: 'LRS action word for "create"',
		defaultMessage: 'create'
	},
	GENERAL_TEXT_LRS_ACTION_DELETED: {
		id: 'GENERAL_TEXT_LRS_ACTION_DELETED',
		description: 'LRS action word for "deleted"',
		defaultMessage: 'deleted'
	},
	GENERAL_TEXT_LRS_ACTION_DELETING: {
		id: 'GENERAL_TEXT_LRS_ACTION_DELETING',
		description: 'LRS action word for "deleting"',
		defaultMessage: 'deleting'
	},
	GENERAL_TEXT_LRS_ACTION_DELETE: {
		id: 'GENERAL_TEXT_LRS_ACTION_DELETE',
		decription: 'LRS action word for "delete"',
		defaultMessage: 'delete'
	},
	GENERAL_TEXT_LRS_ACTION_PLAYED: {
		id: 'GENERAL_TEXT_LRS_ACTION_PLAYED',
		description: 'LRS action word for "played"',
		defaultMessage: 'played'
	},
	GENERAL_TEXT_LRS_ACTION_PLAYING: {
		id: 'GENERAL_TEXT_LRS_ACTION_PLAYING',
		description: 'LRS action word for "playing"',
		defaultMessage: 'playing'
	},
	GENERAL_TEXT_LRS_ACTION_PLAY: {
		id: 'GENERAL_TEXT_LRS_ACTION_PLAY',
		decription: 'LRS action word for "play"',
		defaultMessage: 'play'
	},
	GENERAL_TEXT_LRS_ACTION_PAUSED: {
		id: 'GENERAL_TEXT_LRS_ACTION_PAUSED',
		description: 'LRS action word for "paused"',
		defaultMessage: 'paused'
	},
	GENERAL_TEXT_LRS_ACTION_PAUSING: {
		id: 'GENERAL_TEXT_LRS_ACTION_PAUSING',
		description: 'LRS action word for "pausing"',
		defaultMessage: 'pausing'
	},
	GENERAL_TEXT_LRS_ACTION_PAUSE: {
		id: 'GENERAL_TEXT_LRS_ACTION_PAUSE',
		decription: 'LRS action word for "pause"',
		defaultMessage: 'pause'
	},
	GENERAL_TEXT_LRS_ACTION_RSVPED: {
		id: 'GENERAL_TEXT_LRS_ACTION_RSVPED',
		description: 'LRS action word for "RSVPed"',
		defaultMessage: 'RSVPed'
	},
	GENERAL_TEXT_LRS_ACTION_RSVPING: {
		id: 'GENERAL_TEXT_LRS_ACTION_RSVPING',
		description: 'LRS action word for "RSVPing"',
		defaultMessage: 'RSVPing'
	},
	GENERAL_TEXT_LRS_ACTION_RSVP: {
		id: 'GENERAL_TEXT_LRS_ACTION_RSVP',
		decription: 'LRS action word for "RSVP"',
		defaultMessage: 'RSVP'
	},
	GENERAL_TEXT_LRS_ACTION_STARTED: {
		id: 'GENERAL_TEXT_LRS_ACTION_STARTED',
		description: 'LRS action word for "started"',
		defaultMessage: 'started'
	},
	GENERAL_TEXT_LRS_ACTION_STARTING: {
		id: 'GENERAL_TEXT_LRS_ACTION_STARTING',
		description: 'LRS action word for "starting"',
		defaultMessage: 'starting'
	},
	GENERAL_TEXT_LRS_ACTION_START: {
		id: 'GENERAL_TEXT_LRS_ACTION_START',
		decription: 'LRS action word for "start"',
		defaultMessage: 'start'
	},
	GENERAL_TEXT_LRS_ACTION_VIEWED: {
		id: 'GENERAL_TEXT_LRS_ACTION_VIEWED',
		description: 'LRS action word for "viewed"',
		defaultMessage: 'viewed'
	},
	GENERAL_TEXT_LRS_ACTION_VIEWING: {
		id: 'GENERAL_TEXT_LRS_ACTION_VIEWING',
		description: 'LRS action word for "viewing"',
		defaultMessage: 'viewing'
	},
	GENERAL_TEXT_LRS_ACTION_VIEW: {
		id: 'GENERAL_TEXT_LRS_ACTION_VIEW',
		decription: 'LRS action word for "view"',
		defaultMessage: 'view'
	},
	GENERAL_TEXT_LRS_OBJECT_TYPE_FORM: {
		id: 'GENERAL_TEXT_LRS_OBJECT_TYPE_FORM',
		description: 'LRS object type word for "form"',
		defaultMessage: 'form'
	},
	GENERAL_TEXT_LRS_OBJECT_TYPE_LINK: {
		id: 'GENERAL_TEXT_LRS_OBJECT_TYPE_LINK',
		description: 'LRS object type word for "link"',
		defaultMessage: 'link'
	},
	GENERAL_TEXT_LRS_OBJECT_TYPE_POLL_FORM: {
		id: 'GENERAL_TEXT_LRS_OBJECT_TYPE_POLL_FORM',
		description: 'LRS object type word for "poll-form"',
		defaultMessage: 'poll'
	},
	ACTIVITY_DESCRIPTION_CREATED_RESPONSE: {
		id: 'ACTIVITY_DESCRIPTION_CREATED_RESPONSE',
		description: 'Description for the LRS <created> <post|reply> statement',
		defaultMessage: 'Wrote a new'
	},
	ACTIVITY_DESCRIPTION_CREATED_COMMENT: {
		id: 'ACTIVITY_DESCRIPTION_CREATED_COMMENT',
		description: 'Description for the LRS <created> <comment> statement',
		defaultMessage: 'Commented on the'
	},
	ACTIVITY_DESCRIPTION_CREATED_TOPIC: {
		id: 'ACTIVITY_DESCRIPTION_CREATED_TOPIC',
		description: 'Description for the LRS <created> <topic> statement',
		defaultMessage: 'Started a new'
	},
	ACTIVITY_DESCRIPTION_CREATED_FORUM: {
		id: 'ACTIVITY_DESCRIPTION_CREATED_FORUM',
		description: 'Description for the LRS <created> <forum> statement',
		defaultMessage: 'Started a new'
	},
	ACTIVITY_DESCRIPTION_CREATED: {
		id: 'ACTIVITY_DESCRIPTION_CREATED',
		description: 'Description for a generic LRS <created> <object_type> statement',
		defaultMessage: 'Created a new'
	},
	ACTIVITY_DESCRIPTION_RSVPED_EVENT: {
		id: 'ACTIVITY_DESCRIPTION_RSVPED',
		description: 'Description for an LRS <RSVPed> <event> statement',
		defaultMessage: 'RSVPed for an'
	},
	ACTIVITY_DESCRIPTION_COMPLETED_MODULE: {
		id: 'ACTIVITY_DESCRIPTION_COMPLETED_MODULE',
		description: 'Description for an LRS <completed> <module> statement',
		defaultMessage: 'Completed a'
	},
	ACTIVITY_DESCRIPTION_COMPLETED_SESSION: {
		id: 'ACTIVITY_DESCRIPTION_COMPLETED_SESSION',
		description: 'Description for an LRS <completed> <session> statement',
		defaultMessage: 'Completed the'
	},
	ACTIVITY_DESCRIPTION_MENTIONED: {
		id: 'ACTIVITY_DESCRIPTION_MENTIONED',
		description: 'Description for a generic LRS <mentioned> statement.',
		defaultMessage: 'Mentioned'
	},
	ACTIVITY_DESCRIPTION_PARENT_DISPLAY: {
		id: 'ACTIVITY_DESCRIPTION_PARENT_DISPLAY',
		description: 'Description for generic LRS parent objects',
		defaultMessage: 'in'
	},
	ACTIVITY_DESCRIPTION_MENTIONED_PARENT_DISPLAY: {
		id: 'ACTIVITY_DESCRIPTION_MENTIONED_PARENT_DISPLAY',
		description: 'Description for an LRS <mentioned> parent object',
		defaultMessage: 'in a'
	},
	BUILDER_WARNING_MSG_DELETE_RESOURCE: {
		id: 'BUILDER_WARNING_MSG_DELETE_RESOURCE',
		description: 'Warning message text for deleting a resource.',
		defaultMessage: 'This action will delete any and all child resources and rules related to {title}. This may affect the ability of students to complete the course if completion tracking has been set up for this {type}, so please double check that {title} is no longer required for completion.'
	},
	BUILDER_ERROR_MSG_SAVE_RESOURCE_WITH_TITLE: {
		id: 'BUILDER_ERROR_MSG_SAVE_RESOURCE_WITH_TITLE',
		description: 'Error message text for saving a resource',
		defaultMessage: 'Error while saving {title}, please try again later.'
	},
	BUILDER_ERROR_MSG_SAVE_RESOURCE_WITH_TYPE: {
		id: 'BUILDER_ERROR_MSG_SAVE_RESOURCE_WITH_TYPE',
		description: 'Error message text for saving a resource',
		defaultMessage: 'Error while saving the {type}, please try again later.'
	},
	BUILDER_ERROR_MSG_SAVE_RULE: {
		id: 'BUILDER_ERROR_MSG_SAVE_RULE',
		description: 'Error message text for saving a rule',
		defaultMessage: 'Error while saving the rule, please try again later.'
	},
	BUILDER_ERROR_MSG_SAVE_RESOURCE_SETTINGS: {
		id: 'BUILDER_ERROR_MSG_SAVE_RESOURCE_SETTINGS',
		description: 'Error message text for saving the settings of a resource',
		defaultMessage: 'Error while saving the settings, please try again later.'
	},
	BUILDER_BUTTON_ADD_CHILD: {
		id: 'BUILDER_BUTTON_ADD_CHILD',
		description: 'Button text for "add child" button',
		defaultMessage: 'Add {type}'
	},
	BUILDER_DELETE_RESOURCE_WARNING_TEXT_1: {
		id: 'BUILDER_DELETE_RESOURCE_WARNING_TEXT_1',
		description: 'The first warning text for the delete confirmation modal',
		defaultMessage: 'This action cannot be undone. This will permanently delete the resource and all of its children resources!'
	},
	BUILDER_DELETE_RESOURCE_WARNING_TEXT_2: {
		id: 'BUILDER_DELETE_RESOURCE_WARNING_TEXT_2',
		description: 'The second warning text for the delete confirmation modal',
		defaultMessage: 'This will ALSO permanently delete the rule related to the resource, all of its children rules, and will affect completion tracking for users!'
	},
	BUILDER_DEV_SIDEBAR_BUTTON_EDIT: {
		id: 'BUILDER_DEV_SIDEBAR_BUTTON_EDIT',
		description: 'Button title for the "toggle editing" button in the sidebar',
		defaultMessage: 'Update'
	},
	BUILDER_DEV_SIDEBAR_BUTTON_EDIT_SESSION_SETTINGS: {
		id: 'BUILDER_DEV_SIDEBAR_BUTTON_EDIT_SESSION_SETTINGS',
		description: 'Button title for the "edit session settings" button in the sidebar',
		defaultMessage: 'Edit the session settings'
	},
	BUILDER_DEV_SIDEBAR_BUTTON_SHOW_PROGRESS: {
		id: 'BUILDER_DEV_SIDEBAR_BUTTON_SHOW_PROGRESS',
		description: 'Button title for the "show progress" button in the sidebar',
		defaultMessage: 'Progress'
	},
	BUILDER_DEV_SIDEBAR_BUTTON_SHOW_TABBED: {
		id: 'BUILDER_DEV_SIDEBAR_BUTTON_SHOW_TABBED',
		description: 'Button title for "show tabbed" button in the sidebar',
		defaultMessage: 'Tabbed'
	},
	BUILDER_TITLE_FORM_MISSING_TITLE_FEEDBACK: {
		id: 'BUILDER_TITLE_FORM_MISSING_TITLE_FEEDBACK',
		description: 'Form feedback text for missing resource title',
		defaultMessage: 'a title is required'
	},
	BUILDER_EDIT_RESOURCE_SETTINGS_HEADER: {
		id: 'BUILDER_EDIT_RESOURCE_SETTINGS_HEADER',
		description: 'The header text for the settings editor modal',
		defaultMessage: 'Edit the settings for {title}'
	},
	BUILDER_EDIT_RESOURCE_SETTINGS_PREFERENCES_LABEL_TEXT: {
		id: 'BUILDER_EDIT_RESOURCE_SETTINGS_PREFERENCES_LABEL_TEXT',
		description: 'The label text for the preferences section of the settings editor modal',
		defaultMessage: 'Preferences'
	},
	BUILDER_EDIT_RESOURCE_SETTINGS_FIELD_LABEL_TEXT_SHOW_TITLE: {
		id: 'BUILDER_EDIT_RESOURCE_SETTINGS_FIELD_LABEL_TEXT_SHOW_TITLE',
		description: 'The field label for showing/hiding title fields',
		defaultMessage: 'Show title'
	},
	BUILDER_EDIT_RESOURCE_SETTINGS_FIELD_HELP_TEXT_SHOW_TITLE: {
		id: 'BUILDER_EDIT_RESOURCE_SETTINGS_FIELD_HELP_TEXT_SHOW_TITLE',
		description: 'The field help text for show_title fields',
		defaultMessage: 'Choose visibility of slide title. You may want to hide the slide title for standalone items like videos or embeds.'
	},
	BUILDER_EDIT_RESOURCE_SETTINGS_FIELD_LABEL_TEXT_SELF_REPORTING: {
		id: 'BUILDER_EDIT_RESOURCE_SETTINGS_FIELD_LABEL_TEXT_SELF_REPORTING',
		description: 'The field label for self reporting detailed fields',
		defaultMessage: 'Self reporting'
	},
	BUILDER_EDIT_RESOURCE_SETTINGS_FIELD_HELP_TEXT_SELF_REPORTING: {
		id: 'BUILDER_EDIT_RESOURCE_SETTINGS_FIELD_HELP_TEXT_SELF_REPORTING',
		description: 'The field help text for self reporting fields',
		defaultMessage: 'Allow users to self-report progress for this slide.'
	},
	BUILDER_EDIT_RESOURCE_SETTINGS_FIELD_LABEL_TEXT_DEFAULT_CHILD: {
		id: 'BUILDER_EDIT_RESOURCE_SETTINGS_FIELD_LABEL_TEXT_DEFAULT_CHILD',
		description: 'The field label for default_child_id fields',
		defaultMessage: 'Default child resource to display'
	},
	BUILDER_EDIT_RESOURCE_SETTINGS_FIELD_LABEL_TEXT_OPEN_DATE: {
		id: 'BUILDER_EDIT_RESOURCE_SETTINGS_FIELD_LABEL_TEXT_OPEN_DATE',
		description: 'The field label for open_date fields',
		defaultMessage: 'Open date'
	},
	BUILDER_EDIT_RESOURCE_SETTINGS_FIELD_PRELABEL_TEXT_POINTS: {
		id: 'BUILDER_EDIT_RESOURCE_SETTINGS_FIELD_PRELABEL_TEXT_POINTS',
		description: 'The field label for points fields',
		defaultMessage: 'Points to Award'
	},
	BUILDER_EDIT_RESOURCE_SETTINGS_DELETE_BUTTON: {
		id: 'BUILDER_EDIT_RESOURCE_SETTINGS_DELETE_BUTTON',
		description: 'The label for deleting content in the settings editor modal',
		defaultMessage: 'Delete this {type}'
	},
	BUILDER_EDIT_RESOURCE_SETTINGS_DELETE_LABEL_TEXT: {
		id: 'BUILDER_EDIT_RESOURCE_SETTINGS_DELETE_LABEL_TEXT',
		description: 'The label for deleting content in the settings editor modal',
		defaultMessage: 'Delete this {type}'
	},
	BUILDER_EDIT_RESOURCE_SETTINGS_DELETE_CONFIMATION_TEXT: {
		id: 'BUILDER_EDIT_RESOURCE_SETTINGS_DELETE_CONFIMATION_TEXT',
		description: 'The confirmation text for deleting content in the settings editor modal',
		defaultMessage: 'Once you delete a resource, there is no going back. Please be certain.'
	},
	BUILDER_EDIT_RULE_HEADER_EDIT: {
		id: 'BUILDER_EDIT_RULE_HEADER_EDIT',
		description: 'The header text for the rule editor "edit" modal',
		defaultMessage: 'Edit Completion Rule for {title}'
	},
	BUILDER_EDIT_RULE_HEADER_CREATE: {
		id: 'BUILDER_EDIT_RULE_HEADER_CREATE',
		description: 'The header text for the rule editor "create" modal',
		defaultMessage: 'Create Completion Rule for {title}'
	},
	BUILDER_PROGRESS_TEXT_NO_CONTENT: {
		id: 'BUILDER_PROGRESS_TEXT_NO_CONTENT',
		description: 'Message to display for progress with no content',
		defaultMessage: 'The individual progress page for this student does not exist.'
	},
	BUILDER_PROGRESS_TABLE_COLUMN_HEADER_TEXT_USER: {
		id: 'BUILDER_PROGRESS_TABLE_COLUMN_HEADER_TEXT_USER',
		description: 'Progress table column name for the "user" field',
		defaultMessage: 'User'
	},
	BUILDER_PROGRESS_TABLE_COLUMN_HEADER_TEXT_PROGRESS: {
		id: 'BUILDER_PROGRESS_TABLE_COLUMN_HEADER_TEXT_PROGRESS',
		description: 'Progress table column name for the "progress" field',
		defaultMessage: 'Overall Progress'
	},
	BUILDER_PROGRESS_TABLE_COLUMN_HEADER_TEXT_LAST_ACTIVITY: {
		id: 'BUILDER_PROGRESS_TABLE_COLUMN_HEADER_TEXT_LAST_ACTIVITY',
		description: 'Progress table column name for the "last_activity" field',
		defaultMessage: 'Last Activity'
	},
	BUILDER_PROGRESS_TABLE_COLUMN_HEADER_TEXT_ID: {
		id: 'BUILDER_PROGRESS_TABLE_COLUMN_HEADER_TEXT_ID',
		description: 'Progress table column name for the "id" field',
		defaultMessage: 'View'
	},
	BUILDER_PROGRESS_TABLE_TEXT_USER_SEARCH: {
		id: 'BUILDER_PROGRESS_TABLE_TEXT_USER_SEARCH',
		description: 'The placeholder text for user search fields',
		defaultMessage: 'Search for a user...'
	},
	BUILDER_PROGRESS_TABLE_TEXT_VIEW_INDIVIDUAL_PROGRESS: {
		id: 'BUILDER_PROGRESS_TABLE_TEXT_VIEW_INDIVIDUAL_PROGRESS',
		description: 'Message to display to view individual progress for a user',
		defaultMessage: 'View'
	},
	BUILDER_PROGRESS_TREE_HEADER: {
		id: 'BUILDER_PROGRESS_TREE_HEADER',
		description: 'Header for the individual progress tree',
		defaultMessage: 'Progress Tree'
	},
	BUILDER_PROGRESS_TREE_TEXT_BACK_TO_PROGRESS_TABLE: {
		id: 'BUILDER_PROGRESS_TREE_TEXT_BACK_TO_PROGRESS_TABLE',
		description: 'Message to prompt user back to overall progress page',
		defaultMessage: 'Back to Overall Progress'
	},
	BUILDER_PROGRESS_TREE_TEXT_WARNING_NOT_ACCURATE: {
		id: 'BUILDER_PROGRESS_TREE_TEXT_WARNING_NOT_ACCURATE',
		description: 'Message for admins to verify that the progress tree is accurate',
		defaultMessage: '* Note: If any modules are missing from here please ensure that the rule is set up correctly for the course.'
	},
	BUILDER_PROGRESS_TREE_TEXT_LAST_ACTIVITY: {
		id: 'BUILDER_PROGRESS_TREE_TEXT_LAST_ACTIVITY',
		description: 'Message to display for last activity',
		defaultMessage: 'Last Activity: {last_activity}'
	},
	BUILDER_PROGRESS_TREE_TEXT_RULE_REQUIREMENT: {
		id: 'BUILDER_PROGRESS_TREE_TEXT_RULE_REQUIREMENT',
		description: 'Message to display for progress rule requirements',
		defaultMessage: 'To complete {title}, you must have '
	},
	BUILDER_PROGRESS_TREE_TEXT_SUBCONDITION_OBJECT_TITLE: {
		id: 'BUILDER_PROGRESS_TREE_TEXT_SUBCONDITION_OBJECT_TITLE',
		description: 'Subcondition explanation text with object title',
		defaultMessage: '{action} "{object_title}"'
	},
	BUILDER_PROGRESS_TREE_TEXT_SUBCONDITION_PARENT_OBJECT_TITLE: {
		id: 'BUILDER_PROGRESS_TREE_TEXT_SUBCONDITION_PARENT_OBJECT_TITLE',
		description: 'Subcondition explanation text with parent object title',
		defaultMessage: '{action} a {object_type} for "{parent_object_title}"'
	},
	BUILDER_PROGRESS_TREE_TEXT_SUBCONDITION_OBJECT_TYPE: {
		id: 'BUILDER_PROGRESS_TREE_TEXT_SUBCONDITION_OBJECT_TYPE',
		description: 'Subcondition explanation text with only object type',
		defaultMessage: '{action} a {object_type}'
	},
	BUILDER_PROGRESS_TREE_TEXT_UNABLE_TO_COMPLETE: {
		id: 'BUILDER_PROGRESS_TREE_TEXT_UNABLE_TO_COMPLETE',
		description: 'Message to display for rules that cannot be completed',
		defaultMessage: 'This cannot be completed yet'
	},
	// TODO: Figure out a better way for these smaller words/messages
	BUILDER_PROGRESS_TREE_TEXT_AND: {
		id: 'BUILDER_PROGRESS_TREE_TEXT_AND',
		description: 'Message for "and"',
		defaultMessage: 'and'
	},
	BUILDER_PROGRESS_TREE_TITLE_LINK_TO_RESOURCE: {
		id: 'BUILDER_PROGRESS_TREE_TITLE_LINK_TO_RESOURCE',
		description: 'Message to link to',
		defaultMessage: 'Link to {title}'
	},
	BUILDER_PROGRESSBAR_MULTI_TITLE_USER: {
		id: 'BUILDER_PROGRESSBAR_MULTI_TITLE_USER',
		description: 'Multi progressbar title on progress tree page for users',
		defaultMessage: 'You have completed {total}% of overall course content and {available}% of available content.'
	},
	BUILDER_PROGRESSBAR_MULTI_TITLE_ADMIN: {
		id: 'BUILDER_PROGRESSBAR_MULTI_TITLE_ADMIN',
		description: 'Multi progressbar title on progress tree page for admins',
		defaultMessage: '{name} has completed {total}% of overall course content and {available}% of available content.'
	},
	BUILDER_PROGRESSBAR_TITLE_USER: {
		id: 'BUILDER_PROGRESSBAR_TITLE_USER',
		description: 'Message to display to view content',
		defaultMessage: 'You have completed {total}% of the course.'
	},
	BUILDER_PROGRESSBAR_TITLE_ADMIN: {
		id: 'BUILDER_PROGRESSBAR_TITLE_ADMIN',
		description: 'Message to display to view content',
		defaultMessage: '{name} has completed {total}% of the course.'
	},
	BUILDER_SELF_COMPLETE_BUTTON_COMPLETE: {
		id: 'BUILDER_SELF_COMPLETE_BUTTON_COMPLETE',
		description: 'The label text for self report buttons that are already completed.',
		defaultMessage: 'Complete'
	},
	BUILDER_SELF_COMPLETE_BUTTON_MARK_COMPLETE: {
		id: 'BUILDER_SELF_COMPLETE_BUTTON_MARK_COMPLETE',
		description: 'The label text for self report buttons that still need to be completed.',
		defaultMessage: 'Mark Complete'
	},
	BUILDER_MODULE_ADD_NEW_PLACEHOLDER_TEXT: {
		id: 'BUILDER_MODULE_ADD_NEW_PLACEHOLDER_TEXT',
		description: 'Message to display for creating a new module.',
		defaultMessage: 'Add module'
	},
	BUILDER_SUBMODULE_TEXT_ADD_NEW_PLACEHOLDER: {
		id: 'BUILDER_SUBMODULE_TEXT_ADD_NEW_PLACEHOLDER',
		description: 'Message to display for creating a new submodule.',
		defaultMessage: 'Add submodule'
	},
	BUILDER_SUBSUBMODULE_TEXT_ADD_NEW_PLACEHOLDER: {
		id: 'BUILDER_SUBSUBMODULE_TEXT_ADD_NEW_PLACEHOLDER',
		description: 'Message to display for creating a new nested submodule.',
		defaultMessage: 'Add nested submodule'
	},
	BUILDER_SESSION_TEXT_NO_CONTENT: {
		id: 'BUILDER_SESSION_TEXT_NO_CONTENT',
		description: 'Message to display to students for sessions without content.',
		defaultMessage: 'No content to display for this course.'
	},
	BUILDER_MODULE_TEXT_NO_CONTENT: {
		id: 'BUILDER_MODULE_TEXT_NO_CONTENT',
		description: 'Message to display to students for modules without content.',
		defaultMessage: 'No content to display for this module.'
	},
	BUILDER_SUBMODULE_TEXT_NO_CONTENT: {
		id: 'BUILDER_SUBMODULE_TEXT_NO_CONTENT',
		description: 'Message to display to students for submodules without content.',
		defaultMessage: 'No content to display for this submodule.'
	},
	BUILDER_SESSION_TEXT_ADD_NEW_CONTENT_PROMPT: {
		id: 'BUILDER_SESSION_TEXT_ADD_NEW_CONTENT_PROMPT',
		description: 'Message to display to administrators for sessions without content.',
		defaultMessage: 'Welcome to the course! To get started, try adding a module!'
	},
	BUILDER_MODULE_TEXT_ADD_NEW_CONTENT_PROMPT: {
		id: 'BUILDER_MODULE_TEXT_ADD_NEW_CONTENT_PROMPT',
		description: 'Message to display to administrators for modules without content.',
		defaultMessage: 'This module needs a submodule! To get started, try clicking "Add submodule" above.'
	},
	BUILDER_SUBMODULE_TEXT_ADD_NEW_CONTENT_PROMPT: {
		id: 'BUILDER_SUBMODULE_TEXT_ADD_NEW_CONTENT_PROMPT',
		description: 'Message to display to administrators for submodules without content.',
		defaultMessage: 'This submodule needs some content! To get started, try adding a new piece of content by clicking "Add content" below.'
	},
	BUILDER_RESOURCE_REQUIREMENTS_BUTTON_TITLE: {
		id: 'BUILDER_RESOURCE_REQUIREMENTS_BUTTON_TITLE',
		description: 'Button title for "show requirements" button',
		defaultMessage: 'Show requirements'
	},
	BUILDER_RESOURCE_REQUIREMENTS_SUBCONDITION_PARENT_TEXT: {
		id: 'BUILDER_RESOURCE_REQUIREMENTS_SUBCONDITION_PARENT_TEXT',
		description: 'Display text for parent objects in completion requirements descriptions',
		defaultMessage: 'for {object_title}'
	},
	BUILDER_RESOURCE_REQUIREMENTS_FORM_ENTRY_CREATE_TEXT: {
		id: 'BUILDER_RESOURCE_REQUIREMENTS_FORM_ENTRY_CREATE_TEXT',
		description: 'Display text for <created> <form-entry> pairs in completion requirements descriptions',
		defaultMessage: 'submit',
	},
	BUILDER_RESOURCE_REQUIREMENTS_FORM_ENTRY_TEXT: {
		id: 'BUILDER_RESOURCE_REQUIREMENTS_FORM_ENTRY_TEXT',
		description: 'Display text for form objects in completion requirements descriptions',
		defaultMessage: 'entry'
	},
	BUILDER_RESOURCE_REQUIREMENTS_RSVP_EVENT_TEXT: {
		id: 'BUILDER_RESOURCE_REQUIREMENTS_RSVP_EVENT_TEXT',
		description: 'Display text for RSVP actions in completion requirements descriptions',
		defaultMessage: 'RSVP for',
	},
	BUILDER_RESOURCE_REQUIREMENTS_RULE_ERROR_ADMIN: {
		id: 'BUILDER_RESOURCE_REQUIREMENTS_RULE_ERROR_ADMIN',
		description: 'Warning message for admins for rule setup errors',
		defaultMessage: 'A rule has not been set for this {object_type}'
	},
	BUILDER_RESOURCE_REQUIREMENTS_RULE_ERROR_STUDENT: {
		id: 'BUILDER_RESOURCE_REQUIREMENTS_RULE_ERROR_STUDENT',
		description: 'Warning message for students for rule setup errors',
		defaultMessage: 'This cannot be completed. Contact your course administrator.'
	},
	BUILDER_TOOLBAR_BUTTON_TITLE_VIEW_TOOLBAR: {
		id: 'BUILDER_TOOLBAR_BUTTON_TITLE_VIEW_TOOLBAR',
		description: 'Button title for "view toolbar" button in resource toolbars',
		defaultMessage: 'Open the toolbar'
	},
	BUILDER_TOOLBAR_BUTTON_TITLE_EDIT_TITLE: {
		id: 'BUILDER_TOOLBAR_BUTTON_TITLE_EDIT_TITLE',
		description: 'Button title for "edit title" button in resource toolbars',
		defaultMessage: 'Edit {type} title'
	},
	BUILDER_TOOLBAR_BUTTON_TITLE_EDIT_RULE: {
		id: 'BUILDER_TOOLBAR_BUTTON_TITLE_EDIT_RULE',
		description: 'Button title for "edit rule" button in resource toolbars',
		defaultMessage: 'Edit rule'
	},
	BUILDER_TOOLBAR_BUTTON_TITLE_EDIT_SETTINGS: {
		id: 'BUILDER_TOOLBAR_BUTTON_TITLE_EDIT_SETTINGS',
		description: 'Button title for "edit settings" button in resource toolbars',
		defaultMessage: 'Edit {type} settings'
	},
	BUILDER_TOOLBAR_BUTTON_TITLE_MOVE: {
		id: 'BUILDER_TOOLBAR_BUTTON_TITLE_MOVE',
		description: 'Button title for "move" button in resource toolbars',
		defaultMessage: 'Move {type}'
	},
	BUILDER_TOOLBAR_BUTTON_TITLE_ADD_CHILD: {
		id: 'BUILDER_TOOLBAR_BUTTON_TITLE_ADD_CHILD',
		description: 'Button title for "add child" button in resource toolbars',
		defaultMessage: 'Add {type}'
	},
	BUILDER_TOOLBAR_BUTTON_TITLE_DRAG: {
		id: 'BUILDER_TOOLBAR_BUTTON_TITLE_DRAG',
		description: 'Button title for "drag" button in resource toolbars',
		defaultMessage: 'Move the resource'
	},
	CHAT_GENERAL_HEADER: {
		id: 'CHAT_GENERAL_HEADER',
		description: 'Title for the chat bar',
		defaultMessage: 'Chat'
	},
	CHAT_PRIVATE_CHANNEL_ICON_TITLE: {
		id: 'CHAT_PRIVATE_CHANNEL_ICON_TITLE',
		description: 'Title text for the private channel icon',
		defaultMessage: 'This is a private channel'
	},
	CHAT_PUBLIC_CHANNEL_ICON_TITLE: {
		id: 'CHAT_PUBLIC_CHANNEL_ICON_TITLE',
		description: 'Title text for the public channel icon',
		defaultMessage: 'This is a public channel'
	},
	CHAT_NO_CHANNELS_HELP_TEXT: {
		id: 'CHAT_NO_CHANNELS_HELP_TEXT',
		description: 'Help text to show if user is not a member of any channels yet',
		defaultMessage: 'Use the search bar to join a channel'
	},
	CHAT_NO_CONVERSATIONS_HELP_TEXT: {
		id: 'CHAT_NO_CONVERSATIONS_HELP_TEXT',
		description: 'Help text to show if user has not started any DM conversations',
		defaultMessage: 'Use the search bar to find people'
	},
	CHAT_OPEN_BUTTON_TITLE: {
		id: 'CHAT_OPEN_BUTTON_TITLE',
		description: 'Button title for opening the chat app',
		defaultMessage: 'Open chat'
	},
	CHAT_MINIMIZE_BUTTON_TITLE: {
		id: 'CHAT_MINIMIZE_BUTTON_TITLE',
		description: 'Button title for minimizing the chat app',
		defaultMessage: 'Minimize chat'
	},
	CHAT_SEARCH_PLACEHOLDER: {
		id: 'CHAT_SEARCH_PLACEHOLDER',
		description: 'Placeholder text for search bar on chat home screen',
		defaultMessage: 'Find or start a conversation...'
	},
	CHAT_SEARCH_NO_RESULTS_TEXT: {
		id: 'CHAT_SEARCH_NO_RESULTS_TEXT',
		description: 'Text to display for no results in the chat search',
		defaultMessage: 'No results'
	},
	CHAT_NEW_CHANNEL_BUTTON_TITLE: {
		id: 'CHAT_NEW_CHANNEL_BUTTON_TITLE',
		description: 'Button title for creating a new channel',
		defaultMessage: 'New Channel'
	},
	CHAT_ROOM_MINIMIZE_BUTTON_TITLE: {
		id: 'CHAT_ROOM_MINIMIZE_BUTTON_TITLE',
		description: 'Button title "minimize" button in chat room',
		defaultMessage: 'Minimize conversation'
	},
	CHAT_ROOM_JOIN_CHANNEL_BUTTON_LABEL: {
		id: 'CHAT_JOIN_CHANNEL_BUTTON_LABEL',
		description: 'Button label for joining a channel',
		defaultMessage: 'Join'
	},
	CHAT_ROOM_SETTINGS_ALERT_COPY_LINK: {
		id: 'CHAT_ROOM_SETTINGS_ALERT_COPY_LINK',
		description: 'Message to alert the user that the channel link has been copied to clipboard',
		defaultMessage: 'Link copied to clipboard'
	},
	CHAT_ROOM_SETTINGS_MENU_LABEL_COPY_LINK: {
		id: 'CHAT_ROOM_SETTINGS_MENU_LABEL_COPY_LINK',
		description: 'Settings menu label to copy a shareable link to the channel',
		defaultMessage: 'Get shareable link'
	},
	CHAT_ROOM_SETTINGS_MENU_LABEL_LEAVE_CHANNEL: {
		id: 'CHAT_ROOM_SETTINGS_MENU_LABEL_LEAVE_CHANNEL',
		description: 'Settings menu label for leaving a channel',
		defaultMessage: 'Leave channel'
	},
	CHAT_ROOM_MEMBERS_BUTTON_TITLE: {
		id: 'CHAT_ROOM_MEMBERS_BUTTON_TITLE',
		description: 'Button title for the members button in a chat room',
		defaultMessage: 'Members'
	},
	CHAT_ROOM_SETTINGS_BUTTON_TITLE: {
		id: 'CHAT_ROOM_SETTINGS_BUTTON_TITLE',
		description: 'Button title for the settings button in a chat room',
		defaultMessage: 'Settings'
	},
	CHAT_NEW_CHANNEL_HEADER: {
		id: 'CHAT_NEW_CHANNEL_HEADER',
		description: 'Header title for the "New Channel" view in chat',
		defaultMessage: 'New Channel'
	},
	CHAT_CHANNEL_FORM_ERROR: {
		id: 'CHAT_CHANNEL_FORM_ERROR',
		description: 'Generic error message for error in channel creation',
		defaultMessage: 'Something went wrong.'
	},
	CHAT_CHANNEL_FORM_SETTINGS_TITLE_LABEL: {
		id: 'CHAT_CHANNEL_FORM_SETTINGS_TITLE_LABEL',
		description: 'Label for the channel title input field',
		defaultMessage: 'Name *'
	},
	CHAT_CHANNEL_FORM_SETTINGS_TITLE_PLACEHOLDER: {
		id: 'CHAT_CHANNEL_FORM_SETTINGS_TITLE_PLACEHOLDER',
		description: 'Placeholder text for channel title input field',
		defaultMessage: 'e.g. group-project'
	},
	CHAT_CHANNEL_FORM_SETTINGS_MISSING_TITLE_FEEDBACK: {
		id: 'CHAT_CHANNEL_FORM_SETTINGS_MISSING_TITLE_FEEDBACK',
		description: 'Form feedback text for missing channel title',
		defaultMessage: 'A name is required'
	},
	CHAT_CHANNEL_FORM_SETTINGS_DUPLICATE_TITLE_FEEDBACK: {
		id: 'CHAT_CHANNEL_FORM_SETTINGS_DUPLICATE_TITLE_FEEDBACK',
		description: 'Form feedback text for duplicate channel title',
		defaultMessage: 'Name is taken by another channel or user'
	},
	CHAT_CHANNEL_FORM_SETTINGS_TITLE_LENGTH_FEEDBACK: {
		id: 'CHAT_CHANNEL_FORM_SETTINGS_TITLE_LENGTH_FEEDBACK',
		description: 'Form feedback text for channel titles longer than max length',
		defaultMessage: 'Name must be less than {maxLength} characters'
	},
	CHAT_CHANNEL_FORM_SETTINGS_TITLE_CONTENT_FEEDBACK: {
		id: 'CHAT_CHANNEL_FORM_SETTINGS_TITLE_CONTENT_FEEDBACK',
		description: 'Form feedback text for channel titles with invalid characters',
		defaultMessage: 'Names must be lowercase without spaces'
	},
	CHAT_CHANNEL_FORM_SETTINGS_DESCRIPTION_LABEL: {
		id: 'CHAT_CHANNEL_FORM_SETTINGS_DESCRIPTION_LABEL',
		description: 'Label for channel description input field',
		defaultMessage: 'Description (optional)'
	},
	CHAT_CHANNEL_FORM_SETTINGS_DESCRIPTION_LENGTH_FEEDBACK: {
		id: 'CHAT_CHANNEL_FORM_SETTINGS_DESCRIPTION_LENGTH_FEEDBACK',
		description: 'Form feedback text for descriptions longer than max length',
		defaultMessage: 'Description must be less than {maxLength} characters'
	},
	CHAT_CHANNEL_FORM_SETTINGS_PUBLIC_TYPE_LABEL: {
		id: 'CHAT_CHANNEL_FORM_SETTINGS_PUBLIC_TYPE_LABEL',
		description: 'Label for channel type radio button',
		defaultMessage: 'Public'
	},
	CHAT_CHANNEL_FORM_SETTINGS_PRIVATE_TYPE_LABEL: {
		id: 'CHAT_CHANNEL_FORM_SETTINGS_PRIVATE_TYPE_LABEL',
		description: 'Label for channel type radio button',
		defaultMessage: 'Private'
	},
	CHAT_CHANNEL_FORM_SETTINGS_PUBLIC_LABEL_HINT_TEXT: {
		id: 'CHAT_CHANNEL_FORM_SETTINGS_PUBLIC_LABEL_HINT_TEXT',
		description: 'Helper text explaining public channel visibility',
		defaultMessage: '(anyone in the course can view this channel)'
	},
	CHAT_CHANNEL_FORM_SETTINGS_PRIVATE_LABEL_HINT_TEXT: {
		id: 'CHAT_CHANNEL_FORM_SETTINGS_PRIVATE_LABEL_HINT_TEXT',
		description: 'Helper text explaining private channel visibility',
		defaultMessage: '(only members can view this channel)'
	},
	CHAT_CHANNEL_FORM_SETTINGS_PRIVATE_EXPLANATION: {
		id: 'CHAT_CHANNEL_FORM_SETTINGS_PRIVATE_CHANNEL_EXPLANATION',
		description: 'Helper text explaining private channels for non-admin view',
		defaultMessage: 'This is a private channel. Only invited members will be able to view and contribute.'
	},
	CHAT_CHANNEL_FORM_MEMBERS_LABEL: {
		id: 'CHAT_CHANNEL_FORM_MEMBERS_LABEL',
		description: 'Label for channel members selection field',
		defaultMessage: 'Add members (optional)'
	},
	CHAT_CHANNEL_FORM_MEMBERS_SELECT_ALL_OPTION_LABEL: {
		id: 'CHAT_CHANNEL_FORM_MEMBERS_SELECT_ALL_OPTION_LABEL',
		description: 'Option label for adding all users to a channel',
		defaultMessage: 'Select all'
	},
	CHAT_CHANNEL_FORM_MEMBERS_SELECT_ALL_OPTION_DISPLAY: {
		id: 'CHAT_CHANNEL_FORM_MEMBERS_SELECT_ALL_OPTION_DISPLAY',
		description: 'Display label when user chooses "select all" option for channel members',
		defaultMessage: 'All session members'
	},
	CHAT_SECTION_HEADER_UNREAD: {
		id: 'CHAT_SECTION_HEADER_UNREAD',
		description: 'Label for a user\`s unread channels in chat',
		defaultMessage: 'Unread'
	},
	CHAT_SECTION_HEADER_CONVERSATIONS: {
		id: 'CHAT_SECTION_HEADER_CONVERSATIONS',
		description: 'Label for a user\`s recent direct messages in chat',
		defaultMessage: 'Conversations'
	},
	CHAT_SECTION_HEADER_CHANNELS: {
		id: 'CHAT_SECTION_HEADER_CHANNELS',
		description: 'Label for a user\`s channels in chat',
		defaultMessage: 'Channels'
	},
	EVENTS_ARCHIVE_BUTTON_NEW_EVENT: {
		id: 'EVENTS_ARCHIVE_BUTTON_NEW_EVENT',
		description: 'New Event button on the event archive page.',
		defaultMessage: 'Create New Event'
	},
	EVENTS_ARCHIVE_HEADER: {
		id: 'EVENTS_ARCHIVE_HEADER',
		description: 'Header for the event archive page',
		defaultMessage: 'Live Events'
	},
	EVENTS_ARCHIVE_HEADER_LIVE_NOW: {
		id: 'EVENTS_ARCHIVE_HEADER_LIVE_NOW',
		description: 'Header to display before an event that is live now',
		defaultMessage: 'Live Now'
	},
	EVENTS_ARCHIVE_HEADER_NEXT_UP: {
		id: 'EVENTS_ARCHIVE_HEADER_NEXT_UP',
		description: 'Header to display before the single most immediately upcoming event',
		defaultMessage: 'Next Up'
	},
	EVENTS_ARCHIVE_HEADER_UPCOMING_EVENTS: {
		id: 'EVENTS_ARCHIVE_HEADER_UPCOMING_EVENTS',
		description: 'Header to display before the list of upcoming events',
		defaultMessage: 'Upcoming'
	},
	EVENTS_ARCHIVE_HEADER_PAST_EVENTS: {
		id: 'EVENTS_ARCHIVE_HEADER_PAST_EVENTS',
		description: 'Header to display before the list of past events',
		defaultMessage: 'Past'
	},
	EVENTS_ARCHIVE_BUTTON_TEXT_GO_TO_EVENT: {
		id: 'EVENTS_ARCHIVE_BUTTON_TEXT_GO_TO_EVENT',
		description: 'Button text to display for "go to event" button',
		defaultMessage: 'Go To Event'
	},
	EVENTS_ARCHIVE_CARD_SECTION_LABEL_TEXT_UPCOMING_ATTENDANCE: {
		id: 'EVENTS_ARCHIVE_CARD_SECTION_LABEL_TEXT_UPCOMING_ATTENDANCE',
		description: 'Label text for the upcoming "attendance" section of event archive cards',
		defaultMessage: 'Attending',
	},
	EVENTS_ARCHIVE_CARD_SECTION_LABEL_TEXT_PAST_ATTENDANCE: {
		id: 'EVENTS_ARCHIVE_CARD_SECTION_LABEL_TEXT_PAST_ATTENDANCE',
		description: 'Label text for the past "attendance" section of event archive cards',
		defaultMessage: 'Attended',
	},
	EVENTS_ARCHIVE_CARD_TITLE_TEXT_NUM_HIDDEN_ATTENDANCES: {
		id: 'EVENTS_ARCHIVE_CARD_TITLE_TEXT_NUM_HIDDEN_ATTENDANCES',
		description: 'Title text on hover for the number of hidden attendances of event archive cards',
		defaultMessage: 'and {count} more {count, plural, one {participant} other {participants}}...',
	},
	EVENTS_ARCHIVE_CARD_BUTTON_TEXT_JOIN_EVENT: {
		id: 'EVENTS_ARCHIVE_CARD_BUTTON_TEXT_JOIN_EVENT',
		description: 'Button text for the "join event" link of event archive cards',
		defaultMessage: 'JOIN EVENT',
	},
	EVENTS_ARCHIVE_CARD_BUTTON_TEXT_MORE_DETAILS: {
		id: 'EVENTS_ARCHIVE_CARD_BUTTON_TEXT_MORE_DETAILS',
		description: 'Button text for the "more details" link of event archive cards',
		defaultMessage: 'DETAILS',
	},
	EVENTS_ARCHIVE_CARD_BUTTON_TEXT_RSVP_YES: {
		id: 'EVENTS_ARCHIVE_CARD_BUTTON_TEXT_RSVP_YES',
		description: 'Button text for the RSVP "yes" link of event archive cards',
		defaultMessage: 'RSVP',
	},
	EVENTS_ARCHIVE_CARD_BUTTON_TEXT_RSVP_NO: {
		id: 'EVENTS_ARCHIVE_CARD_BUTTON_TEXT_RSVP_NO',
		description: 'Button text for the RSVP "no" link of event archive cards',
		defaultMessage: 'UNDO RSVP',
	},
	EVENTS_BREADCRUMB_TEXT_EVENTS_ARCHIVE: {
		id: 'EVENTS_BREADCRUMB_TEXT_EVENTS_ARCHIVE',
		description: 'Text to display for breadcrumb to events "archive" page',
		defaultMessage: 'Events'
	},
	EVENTS_BREADCRUMB_TEXT_EVENTS_CREATE: {
		id: 'EVENTS_BREADCRUMB_TEXT_EVENTS_CREATE',
		description: 'Text to display for breadcrumb to "create" event page',
		defaultMessage: 'New'
	},
	EVENTS_BREADCRUMB_TEXT_EVENTS_EDIT: {
		id: 'EVENTS_BREADCRUMB_TEXT_EVENTS_EDIT',
		description: 'Text to display for breadcrumb to "edit" event page',
		defaultMessage: 'Edit'
	},
	EVENTS_LIVE_HEADER_ADMINISTRATION: {
		id: 'EVENTS_LIVE_HEADER_ADMINISTRATION',
		description: 'Header to display before the administration tools for the event',
		defaultMessage: 'Event Administration'
	},
	EVENTS_LIVE_HEADER_ATTENDANCE: {
		id: 'EVENTS_LIVE_HEADER_ATTENDANCE',
		description: 'Header to display before the attendance list for the event',
		defaultMessage: 'Attendance'
	},
	EVENTS_LIVE_HEADER_ATTENDANCE_STATUS: {
		id: 'EVENTS_LIVE_HEADER_ATTENDANCE_STATUS',
		description: 'Header to display before showing the attendance status of the user',
		defaultMessage: 'Your Status'
	},
	EVENTS_LIVE_TEXT_ATTENDANCE_ATTENDING: {
		id: 'EVENTS_LIVE_TEXT_ATTENDANCE_ATTENDING',
		description: 'Simple text saying that the user is attending',
		defaultMessage: 'Attending'
	},
	EVENTS_LIVE_TEXT_ATTENDANCE_NOT_ATTENDING: {
		id: 'EVENTS_LIVE_TEXT_ATTENDANCE_NOT_ATTENDING',
		description: 'Simple text saying that the user is not attending',
		defaultMessage: 'Not attending'
	},
	EVENTS_LIVE_TEXT_ATTENDANCE_CHANGE_ATTENDING: {
		id: 'EVENTS_LIVE_TEXT_ATTENDANCE_CHANGE_ATTENDING',
		description: 'Text to click to change status to attending',
		defaultMessage: 'Change to Attending'
	},
	EVENTS_LIVE_TEXT_ATTENDANCE_CHANGE_NOT_ATTENDING: {
		id: 'EVENTS_LIVE_TEXT_ATTENDANCE_CHANGE_NOT_ATTENDING',
		description: 'Text to click to change status to not attending',
		defaultMessage: 'Change to Not Attending'
	},
	EVENTS_LIVE_HEADER_ATTENDANCE_PROMPT: {
		id: 'EVENTS_LIVE_HEADER_ATTENDANCE_PROMPT',
		description: 'Header to display before asking if the user will attend the event',
		defaultMessage: 'Will you be attending?'
	},
	EVENTS_LIVE_HEADER_ATTENDEES: {
		id: 'EVENTS_LIVE_HEADER_ATTENDEES',
		description: 'Header to display before showing those who have already RSVPed',
		defaultMessage: 'Who\'s Attending'
	},
	EVENTS_LIVE_BUTTON_EDIT_EVENT: {
		id: 'EVENTS_LIVE_BUTTON_EDIT_EVENT',
		description: 'Edit Event button on an individual event page.',
		defaultMessage: 'Edit Event'
	},
	EVENTS_LIVE_BUTTON_DELETE_EVENT: {
		id: 'EVENTS_LIVE_BUTTON_DELETE_EVENT',
		description: 'Delete Event button on an individual event page.',
		defaultMessage: 'Delete Event'
	},
	EVENTS_LIVE_BUTTON_RSVP_YES: {
		id: 'EVENTS_LIVE_BUTTON_RSVP_YES',
		description: 'RSVP "yes" button on an individual event page.',
		defaultMessage: 'Yes'
	},
	EVENTS_LIVE_BUTTON_RSVP_NO: {
		id: 'EVENTS_LIVE_BUTTON_RSVP_NO',
		description: 'RSVP "no" button on an individual event page.',
		defaultMessage: 'No'
	},
	EVENTS_CREATION_HEADER_EDIT: {
		id: 'EVENTS_CREATION_HEADER_EDIT',
		description: 'Header for the "edit" live event page',
		defaultMessage: 'Edit Event'
	},
	EVENTS_CREATION_HEADER_NEW: {
		id: 'EVENTS_CREATION_HEADER_NEW',
		description: 'Header for the "create new" live event page',
		defaultMessage: 'Create New Event'
	},
	EVENTS_CREATION_ERROR_MSG_ON_CREATE: {
		id: 'EVENTS_CREATION_ERROR_MSG_ON_CREATE',
		description: 'Error message text for creating a live event',
		defaultMessage: 'Error while creating the event, please try again later.'
	},
	EVENTS_CREATION_ERROR_MSG_ON_UPDATE: {
		id: 'EVENTS_CREATION_ERROR_MSG_ON_UPDATE',
		description: 'Error message text for updating a live event',
		defaultMessage: 'Error while saving the event, please try again later.'
	},
	EVENTS_CREATION_FIELD_LABEL_TEXT_TITLE: {
		id: 'EVENTS_CREATION_FIELD_LABEL_TEXT_TITLE',
		description: 'Label text for the Title field in event creation',
		defaultMessage: 'Title'
	},
	EVENTS_CREATION_FIELD_PLACEHOLDER_TEXT_TITLE: {
		id: 'EVENTS_CREATION_FIELD_PLACEHOLDER_TEXT_TITLE',
		description: 'Placeholder text for the Title field in event creation',
		defaultMessage: 'Name of the event'
	},
	EVENTS_CREATION_FIELD_LABEL_TEXT_DESCRIPTION: {
		id: 'EVENTS_CREATION_FIELD_LABEL_TEXT_DESCRIPTION',
		description: 'Label text for the Description field in event creation',
		defaultMessage: 'Description'
	},
	EVENTS_CREATION_FIELD_PLACEHOLDER_TEXT_DESCRIPTION: {
		id: 'EVENTS_CREATION_FIELD_PLACEHOLDER_TEXT_DESCRIPTION',
		description: 'Placeholder text for the Description field in event creation',
		defaultMessage: 'A brief description of the live event.'
	},
	EVENTS_CREATION_FIELD_GROUP_LABEL_TEXT_DATE_AND_TIME: {
		id: 'EVENTS_CREATION_FIELD_GROUP_LABEL_TEXT_DATE_AND_TIME',
		description: 'Label text for the group of fields related to date/time in event creation',
		defaultMessage: 'When'
	},
	EVENTS_CREATION_FIELD_GROUP_SPACER_TEXT_DATE_AND_TIME: {
		id: 'EVENTS_CREATION_FIELD_GROUP_SPACER_TEXT_DATE_AND_TIME',
		description: 'Spacer text for the group of fields related to date/time in event creation',
		defaultMessage: 'to'
	},
	EVENTS_CREATION_FIELD_LABEL_TEXT_ALL_DAY: {
		id: 'EVENTS_CREATION_FIELD_LABEL_TEXT_ALL_DAY',
		description: 'Label text for the All Day field in event creation',
		defaultMessage: 'All day'
	},
	EVENTS_CREATION_FIELD_LABEL_TEXT_START_DATE: {
		id: 'EVENTS_CREATION_FIELD_LABEL_TEXT_START_DATE',
		description: 'Label text for the Start Date field in event creation',
		defaultMessage: 'Start Date'
	},
	EVENTS_CREATION_FIELD_PLACEHOLDER_TEXT_START_DATE: {
		id: 'EVENTS_CREATION_FIELD_PLACEHOLDER_TEXT_START_DATE',
		description: 'Placeholder text for the Start Date field in event creation',
		defaultMessage: 'Start date'
	},
	EVENTS_CREATION_FIELD_LABEL_TEXT_START_TIME: {
		id: 'EVENTS_CREATION_FIELD_LABEL_TEXT_START_TIME',
		description: 'Label text for the Start Time field in event creation',
		defaultMessage: 'Start Time'
	},
	EVENTS_CREATION_FIELD_PLACEHOLDER_TEXT_START_TIME: {
		id: 'EVENTS_CREATION_FIELD_PLACEHOLDER_TEXT_START_TIME',
		description: 'Placeholder text for the Start Time field in event creation',
		defaultMessage: 'Start time'
	},
	EVENTS_CREATION_FIELD_LABEL_TEXT_END_DATE: {
		id: 'EVENTS_CREATION_FIELD_LABEL_TEXT_END_DATE',
		description: 'Label text for the End Date field in event creation',
		defaultMessage: 'End Date'
	},
	EVENTS_CREATION_FIELD_PLACEHOLDER_TEXT_END_DATE: {
		id: 'EVENTS_CREATION_FIELD_PLACEHOLDER_TEXT_END_DATE',
		description: 'Placeholder text for the End Date field in event creation',
		defaultMessage: 'End date'
	},
	EVENTS_CREATION_FIELD_LABEL_TEXT_END_TIME: {
		id: 'EVENTS_CREATION_FIELD_LABEL_TEXT_END_TIME',
		description: 'Label text for the End Time field in event creation',
		defaultMessage: 'End Time'
	},
	EVENTS_CREATION_FIELD_PLACEHOLDER_TEXT_END_TIME: {
		id: 'EVENTS_CREATION_FIELD_PLACEHOLDER_TEXT_END_TIME',
		description: 'Placeholder text for the End Time field in event creation',
		defaultMessage: 'End time'
	},
	EVENTS_CREATION_FIELD_LABEL_TEXT_TIMEZONE: {
		id: 'EVENTS_CREATION_FIELD_LABEL_TEXT_TIMEZONE',
		description: 'Label text for the Timezone field in event creation',
		defaultMessage: 'Timezone'
	},
	EVENTS_CREATION_FIELD_PLACEHOLDER_TEXT_TIMEZONE: {
		id: 'EVENTS_CREATION_FIELD_PLACEHOLDER_TEXT_TIMEZONE',
		description: 'Placeholder text for the Timezone field in event creation',
		defaultMessage: 'Timezone of the event'
	},
	EVENTS_CREATION_FIELD_LABEL_TEXT_EMBED_CODE: {
		id: 'EVENTS_CREATION_FIELD_LABEL_TEXT_EMBED_CODE',
		description: 'Label text for the Embed Code field in event creation',
		defaultMessage: 'Livestream Link'
	},
	EVENTS_CREATION_FIELD_HELP_TEXT_EMBED_CODE: {
		id: 'EVENTS_CREATION_FIELD_HELP_TEXT_EMBED_CODE',
		description: 'Help text for the Embed Code field in event creation',
		defaultMessage: 'Add a link to the livestream here. It can be an entire iframe or simply the embed url on its own.'
	},
	EVENTS_CREATION_FIELD_LABEL_TEXT_AFTER_CONTENT: {
		id: 'EVENTS_CREATION_FIELD_LABEL_TEXT_AFTER_CONTENT',
		description: 'Label text for the After Content field in event creation',
		defaultMessage: 'Additional Information'
	},
	EVENTS_CREATION_FIELD_HELP_TEXT_AFTER_CONTENT: {
		id: 'EVENTS_CREATION_FIELD_HELP_TEXT_AFTER_CONTENT',
		description: 'Help text for the After Content field in event creation',
		defaultMessage: 'Use this section to add context to your livestream. You can embed forms, posts, or other interactive elements here. You can also add links to slide presentations or any other content that would be helpful to participants. This content will only be shown once the event begins.'
	},
	EVENTS_CREATION_BUTTON_SUBMIT: {
		id: 'EVENTS_CREATION_BUTTON_SUBMIT',
		description: 'Submit button on the event creation page.',
		defaultMessage: 'Submit'
	},
	EVENTS_CREATION_BUTTON_CANCEL: {
		id: 'EVENTS_CREATION_BUTTON_CANCEL',
		description: 'Cancel button on the event creation page.',
		defaultMessage: 'Cancel'
	},
	EVENTS_WARNING_MSG_DELETE_EVENT: {
		id: 'EVENTS_WARNING_MSG_DELETE_EVENT',
		description: 'Warning message text for deleting an event.',
		defaultMessage: 'This action will delete the event and any live event chat history related to {title}. If you need to change the title, description, date, time, or livestream link, you can edit the event and students will see the changes update in real-time.'
	},
	MEMBERS_POINTS_LOG_COLUMN_HEADER_TEXT_DATE: {
		id: 'MEMBERS_POINTS_LOG_COLUMN_HEADER_TEXT_DATE',
		description: 'Points table column name for the "date" field',
		defaultMessage: 'Date'
	},
	MEMBERS_POINTS_LOG_COLUMN_HEADER_TEXT_POINTS: {
		id: 'MEMBERS_POINTS_LOG_COLUMN_HEADER_TEXT_POINTS',
		description: 'Points table column name for the "points" field',
		defaultMessage: 'Points'
	},
	MEMBERS_POINTS_LOG_COLUMN_HEADER_TEXT_EXPLANATION: {
		id: 'MEMBERS_POINTS_LOG_COLUMN_HEADER_TEXT_EXPLANATION',
		description: 'Points table column name for the "explanation" field',
		defaultMessage: 'Explanation'
	},
	MEMBERS_POINTS_LOG_TEXT_EXPLANATION_MANUALLY_AWARDED: {
		id: 'MEMBERS_POINTS_LOG_TEXT_EXPLANATION_MANUALLY_AWARDED',
		description: 'Points log text for manually awarded "explanation"',
		defaultMessage: 'Manually awarded by administrator'
	},
	MEMBERS_POINTS_LOG_TEXT_EXPLANATION_OBJECT_TITLE: {
		id: 'MEMBERS_POINTS_LOG_TEXT_EXPLANATION_OBJECT_TITLE',
		description: 'Points log text for "explanation" with object title',
		defaultMessage: '{action} "{object_title}"'
	},
	MEMBERS_POINTS_LOG_TEXT_EXPLANATION_PARENT_OBJECT_TITLE: {
		id: 'MEMBERS_POINTS_LOG_TEXT_EXPLANATION_PARENT_OBJECT_TITLE',
		description: 'Points log text for "explanation" with parent object title',
		defaultMessage: '{action} a {object_type} for "{parent_object_title}"'
	},
	MEMBERS_POINTS_LOG_TEXT_EXPLANATION_OBJECT_TYPE: {
		id: 'MEMBERS_POINTS_LOG_TEXT_EXPLANATION_OBJECT_TYPE',
		description: 'Points log text for "explanation" with only object type',
		defaultMessage: '{action} a {object_type}'
	},
	NOTIFICATIONS_DEFAULT_TITLE: {
		id: 'NOTIFICATIONS_DEFAULT_TITLE',
		description: 'Default title for notifications, can be overriden in the admin',
		defaultMessage: 'Well done!'
	},
	NOTIFICATIONS_TEXT_EARNED_POINT_WITH_EXPLANATION: {
		id: 'NOTIFICATIONS_TEXT_EARNED_POINT_WITH_EXPLANATION',
		description: 'Text for the "earned point" notification',
		defaultMessage: 'You earned {point_value} {point_label} for {explanation}'
	},
	NOTIFICATIONS_TEXT_EARNED_POINT_WITH_TITLE: {
		id: 'NOTIFICATIONS_TEXT_EARNED_POINT_WITH_TITLE',
		description: 'Text for the "earned point" notification',
		defaultMessage: 'You earned {point_value} {point_label} for {action} {title}'
	},
	NOTIFICATIONS_TEXT_EARNED_POINT_WITH_NO_TITLE: {
		id: 'NOTIFICATIONS_TEXT_EARNED_POINT_WITH_NO_TITLE',
		description: 'Text for the "earned point" notification',
		defaultMessage: 'You earned {point_value} {point_label} for {action} a {type}'
	},
	SETTINGS_ALERT_TEXT_UPDATE_SETTINGS_SUCCESS: {
		id: 'SETTINGS_ALERT_TEXT_UPDATE_SETTINGS_SUCCESS',
		description: 'Success message for updating session settings',
		defaultMessage: 'Settings updated successfully'
	},
	SETTINGS_ALERT_TEXT_UPDATE_SETTINGS_ERROR: {
		id: 'SETTINGS_ALERT_TEXT_UPDATE_SETTINGS_ERROR',
		description: 'Error message for updating session settings',
		defaultMessage: 'Error while updating settings, please try again later'
	},
	SETTINGS_ALERT_TEXT_UPDATE_RULE_SUCCESS: {
		id: 'SETTINGS_ALERT_TEXT_UPDATE_RULE_SUCCESS',
		description: 'Success message for updating session rule',
		defaultMessage: 'Rule updated successfully'
	},
	SETTINGS_ALERT_TEXT_UPDATE_RULE_ERROR: {
		id: 'SETTINGS_ALERT_TEXT_UPDATE_RULE_ERROR',
		description: 'Error message for updating session rule',
		defaultMessage: 'Error while updating rule, please try again later'
	},
	SETTINGS_AWARD_POINTS_HEADER: {
		id: 'SETTINGS_AWARD_POINTS_HEADER',
		description: 'Header for the manually award points settings page',
		defaultMessage: 'Award Points to a User'
	},
	SETTINGS_AWARD_POINTS_FIELD_LABEL_TEXT_USER: {
		id: 'SETTINGS_AWARD_POINTS_FIELD_LABEL_TEXT_USER',
		description: 'Label for "user" field on award points settings page',
		defaultMessage: 'User'
	},
	SETTINGS_AWARD_POINTS_FIELD_LABEL_TEXT_MANUAL_EXPLANATION: {
		id: 'SETTINGS_AWARD_POINTS_FIELD_LABEL_TEXT_MANUAL_EXPLANATION',
		description: 'Label for "explanation" field on award points settings page',
		defaultMessage: 'Explanation'
	},
	SETTINGS_AWARD_POINTS_FIELD_DESCRIPTION_TEXT_MANUAL_EXPLANATION: {
		id: 'SETTINGS_AWARD_POINTS_FIELD_DESCRIPTION_TEXT_MANUAL_EXPLANATION',
		description: 'Description for "explanation" field on points settings page',
		defaultMessage: 'Provide an explanation for the points awarded. This will appear in the user\'s point log.'
	},
	SETTINGS_AWARD_POINTS_FIELD_LABEL_TEXT_VALUE: {
		id: 'SETTINGS_AWARD_POINTS_FIELD_LABEL_TEXT_VALUE',
		description: 'Label for "value" field on award points settings page',
		defaultMessage: 'Points to Award'
	},
	SETTINGS_EDIT_POINT_HEADER_EDIT: {
		id: 'SETTINGS_EDIT_POINT_HEADER_EDIT',
		description: 'Header for the "edit" points settings page',
		defaultMessage: 'Edit Point'
	},
	SETTINGS_EDIT_POINT_HEADER_NEW: {
		id: 'SETTINGS_EDIT_POINT_HEADER_NEW',
		description: 'Header for the "create new" points settings page',
		defaultMessage: 'Create New Point'
	},
	SETTINGS_EDIT_POINT_FIELD_LABEL_TEXT_ACTION: {
		id: 'SETTINGS_EDIT_POINT_FIELD_LABEL_TEXT_ACTION',
		description: 'Label for "action" field on points settings page',
		defaultMessage: 'Action'
	},
	SETTINGS_EDIT_POINT_FIELD_LABEL_TEXT_OBJECT_TYPE: {
		id: 'SETTINGS_EDIT_POINT_FIELD_LABEL_TEXT_OBJECT_TYPE',
		description: 'Label for "object_type" field on points settings page',
		defaultMessage: 'Object Type'
	},
	SETTINGS_EDIT_POINT_FIELD_LABEL_TEXT_OBJECT: {
		id: 'SETTINGS_EDIT_POINT_FIELD_LABEL_TEXT_OBJECT',
		description: 'Label for "object" field on points settings page',
		defaultMessage: 'Object'
	},
	SETTINGS_EDIT_POINT_FIELD_LABEL_TEXT_PARENT_OBJECT: {
		id: 'SETTINGS_EDIT_POINT_FIELD_LABEL_TEXT_PARENT_OBJECT',
		description: 'Label for "parent_object_id" field on points settings page',
		defaultMessage: 'Parent Object'
	},
	SETTINGS_EDIT_POINT_FIELD_LABEL_TEXT_PARENT_OBJECT_TYPE: {
		id: 'SETTINGS_EDIT_POINT_FIELD_LABEL_TEXT_PARENT_OBJECT_TYPE',
		description: 'Label for "parent_object_type" field on points settings page',
		defaultMessage: 'Parent Object Type'
	},
	SETTINGS_EDIT_POINT_FIELD_DESCRIPTION_TEXT_PARENT_OBJECT: {
		id: 'SETTINGS_EDIT_POINT_FIELD_DESCRIPTION_TEXT_PARENT_OBJECT',
		description: 'Description text for form "parent_object" on points settings page',
		defaultMessage: 'Award points to a user when they complete a specific form.'
	},
	SETTINGS_EDIT_POINT_FIELD_LABEL_TEXT_VALUE: {
		id: 'SETTINGS_EDIT_POINT_FIELD_LABEL_TEXT_VALUE',
		description: 'Label for "points" field on points settings page',
		defaultMessage: 'Points to Award'
	},
	SETTINGS_EDIT_POINT_TEXT_ORGANIZATION_DESCRIPTION: {
		id: 'SETTINGS_EDIT_POINT_TEXT_ORGANIZATION_DESCRIPTION',
		description: 'Description text for "organization" point on points edit page',
		defaultMessage: 'Note: This point rule was created by an organization administrator. If you don\'t want it applied for this session, you can set the value to 0.'
	},
	SETTINGS_EDIT_POINT_TEXT_GLOBAL_DESCRIPTION: {
		id: 'SETTINGS_EDIT_POINT_TEXT_GLOBAL_DESCRIPTION',
		description: 'Description text for "global" point on points edit page',
		defaultMessage: 'Note: This point rule was created globally by a TechChange administrator. If you don\'t want it applied for this session, you can set the value to 0.'
	},
	SETTINGS_EDIT_RULE_HEADER_EDIT: {
		id: 'SETTINGS_EDIT_RULE_HEADER_EDIT',
		description: 'The header text for the rule editor "edit" modal',
		defaultMessage: 'Edit Completion Rule for {title}'
	},
	SETTINGS_EDIT_RULE_HEADER_CREATE: {
		id: 'SETTINGS_EDIT_RULE_HEADER_CREATE',
		description: 'The header text for the rule editor "create" modal',
		defaultMessage: 'Create Completion Rule for {title}'
	},
	SETTINGS_EDIT_SESSION_SETTINGS_FIELD_LABEL_TEXT_DEFAULT_CHILD: {
		id: 'SETTINGS_EDIT_SESSION_SETTINGS_FIELD_LABEL_TEXT_DEFAULT_CHILD',
		description: 'The field label for default_child_id fields',
		defaultMessage: 'Default child resource to display'
	},
	SETTINGS_EDIT_SESSION_SETTINGS_FIELD_LABEL_TEXT_OPEN_DATE: {
		id: 'SETTINGS_EDIT_SESSION_SETTINGS_FIELD_LABEL_TEXT_OPEN_DATE',
		description: 'The field label for open_date fields',
		defaultMessage: 'Open date'
	},
	SETTINGS_GENERAL_HEADER: {
		id: 'SETTINGS_GENERAL_HEADER',
		description: 'Header for the general settings page',
		defaultMessage: 'General Settings'
	},
	SETTINGS_BREADCRUMB_TEXT: {
		id: 'SETTINGS_BREADCRUMB_TEXT',
		description: 'Text to display for breadcrumb to settings "settings" page',
		defaultMessage: 'Settings'
	},
	SETTINGS_BREADCRUMB_TEXT_POINTS: {
		id: 'SETTINGS_BREADCRUMB_TEXT_POINTS',
		description: 'Text to display for breadcrumb to settings "points" page',
		defaultMessage: 'Points'
	},
	SETTINGS_BREADCRUMB_TEXT_POINTS_CREATE: {
		id: 'SETTINGS_BREADCRUMB_TEXT_POINTS_CREATE',
		description: 'Text to display for breadcrumb to settings "create" point page',
		defaultMessage: 'New'
	},
	SETTINGS_BREADCRUMB_TEXT_POINTS_EDIT: {
		id: 'SETTINGS_BREADCRUMB_TEXT_POINTS_EDIT',
		description: 'Text to display for breadcrumb to settings "edit" point page',
		defaultMessage: 'Edit'
	},
	SETTINGS_BREADCRUMB_TEXT_POINTS_AWARD: {
		id: 'SETTINGS_BREADCRUMB_TEXT_POINTS_AWARD',
		description: 'Text to display for breadcrumb to settings "award" points page',
		defaultMessage: 'Award Points'
	},
	SETTINGS_BREADCRUMB_TEXT_POINTS_LOG: {
		id: 'SETTINGS_BREADCRUMB_TEXT_POINTS_LOG',
		description: 'Text to display for breadcrumb to settings "points log" page',
		defaultMessage: 'Points Log'
	},
	SETTINGS_POINTS_BUTTON_VIEW: {
		id: 'SETTINGS_POINTS_BUTTON_VIEW',
		description: 'Button label for "view points" on points settings page',
		defaultMessage: 'View Points Settings'
	},
	SETTINGS_POINTS_BUTTON_ADD_POINT: {
		id: 'SETTINGS_POINTS_BUTTON_ADD_POINT',
		description: 'Button label for "add point" on points settings page',
		defaultMessage: 'Add Point'
	},
	SETTINGS_POINTS_BUTTON_AWARD_POINTS: {
		id: 'SETTINGS_POINTS_BUTTON_AWARD_POINTS',
		description: 'Button label for "award points" on points settings page',
		defaultMessage: 'Award Points'
	},
	SETTINGS_POINTS_BUTTON_VIEW_LOG: {
		id: 'SETTINGS_POINTS_BUTTON_VIEW_LOG',
		description: 'Button label for "view log" on points settings page',
		defaultMessage: 'View Points Log'
	},
	SETTINGS_POINTS_TABLE_COLUMN_HEADER_TEXT_ACTION: {
		id: 'SETTINGS_POINTS_TABLE_COLUMN_HEADER_TEXT_ACTION',
		description: 'Points table column name for the "action" field',
		defaultMessage: 'Action'
	},
	SETTINGS_POINTS_TABLE_COLUMN_HEADER_TEXT_OBJECT: {
		id: 'SETTINGS_POINTS_TABLE_COLUMN_HEADER_TEXT_OBJECT',
		description: 'Points table column name for the "object" field',
		defaultMessage: 'Object'
	},
	SETTINGS_POINTS_TABLE_COLUMN_HEADER_TEXT_PARENT_OBJECT: {
		id: 'SETTINGS_POINTS_TABLE_COLUMN_HEADER_TEXT_PARENT_OBJECT',
		description: 'Points table column name for the "parent_object" field',
		defaultMessage: 'Parent Object'
	},
	SETTINGS_POINTS_TABLE_COLUMN_HEADER_TEXT_SCOPE: {
		id: 'SETTINGS_POINTS_TABLE_COLUMN_HEADER_TEXT_SCOPE',
		description: 'Points table column name for the "scope" field',
		defaultMessage: 'Scope'
	},
	SETTINGS_POINTS_TABLE_COLUMN_HEADER_TEXT_VALUE: {
		id: 'SETTINGS_POINTS_TABLE_COLUMN_HEADER_TEXT_VALUE',
		description: 'Points table column name for the "value" field',
		defaultMessage: 'Points to Award'
	},
	SETTINGS_POINTS_LOG_TEXT_BACK_TO_POINT_SETTINGS: {
		id: 'SETTINGS_POINTS_LOG_TEXT_BACK_TO_POINT_SETTINGS',
		description: 'Message to prompt user back to settings points page',
		defaultMessage: 'Back to Points Settings'
	},
	SETTINGS_POINTS_LOG_COLUMN_HEADER_TEXT_DATE: {
		id: 'SETTINGS_POINTS_LOG_COLUMN_HEADER_TEXT_DATE',
		description: 'Points table column name for the "date" field',
		defaultMessage: 'Date'
	},
	SETTINGS_POINTS_LOG_COLUMN_HEADER_TEXT_POINTS: {
		id: 'SETTINGS_POINTS_LOG_COLUMN_HEADER_TEXT_POINTS',
		description: 'Points table column name for the "points" field',
		defaultMessage: 'Points'
	},
	SETTINGS_POINTS_LOG_COLUMN_HEADER_TEXT_USER: {
		id: 'SETTINGS_POINTS_LOG_COLUMN_HEADER_TEXT_USER',
		description: 'Points table column name for the "user" field',
		defaultMessage: 'User'
	},
	SETTINGS_POINTS_LOG_COLUMN_HEADER_TEXT_EXPLANATION: {
		id: 'SETTINGS_POINTS_LOG_COLUMN_HEADER_TEXT_EXPLANATION',
		description: 'Points table column name for the "explanation" field',
		defaultMessage: 'Explanation'
	},
	SETTINGS_POINTS_LOG_TEXT_EXPLANATION_MANUALLY_AWARDED: {
		id: 'SETTINGS_POINTS_LOG_TEXT_EXPLANATION_MANUALLY_AWARDED',
		description: 'Points log text for manually awarded "explanation"',
		defaultMessage: 'Manually awarded by administrator'
	},
	SETTINGS_POINTS_LOG_TEXT_EXPLANATION_OBJECT_TITLE: {
		id: 'SETTINGS_POINTS_LOG_TEXT_EXPLANATION_OBJECT_TITLE',
		description: 'Points log text for "explanation" with object title',
		defaultMessage: '{action} "{object_title}"'
	},
	SETTINGS_POINTS_LOG_TEXT_EXPLANATION_PARENT_OBJECT_TITLE: {
		id: 'SETTINGS_POINTS_LOG_TEXT_EXPLANATION_PARENT_OBJECT_TITLE',
		description: 'Points log text for "explanation" with parent object title',
		defaultMessage: '{action} a {object_type} for "{parent_object_title}"'
	},
	SETTINGS_POINTS_LOG_TEXT_EXPLANATION_OBJECT_TYPE: {
		id: 'SETTINGS_POINTS_LOG_TEXT_EXPLANATION_OBJECT_TYPE',
		description: 'Points log text for "explanation" with only object type',
		defaultMessage: '{action} a {object_type}'
	},
	SHARED_CONTENT_BUILDER_BUTTON_TEXT_ADD_CONTENT: {
		id: 'SHARED_CONTENT_BUILDER_BUTTON_TEXT_ADD_CONTENT',
		description: 'The button text for adding new content.',
		defaultMessage: 'Add content',
	},
	SHARED_CONTENT_BUILDER_BUTTON_TEXT_HIDE_ADVANCED_FIELDS: {
		id: 'SHARED_CONTENT_BUILDER_BUTTON_TEXT_HIDE_ADVANCED_FIELDS',
		description: 'The text for the "hide adanced fields" button',
		defaultMessage: 'Hide advanced options...'
	},
	SHARED_CONTENT_BUILDER_BUTTON_TEXT_SHOW_ADVANCED_FIELDS: {
		id: 'SHARED_CONTENT_BUILDER_BUTTON_TEXT_SHOW_ADVANCED_FIELDS',
		description: 'The text for the "show adanced fields" button',
		defaultMessage: 'Show advanced options...'
	},
	SHARED_CONTENT_BUILDER_LABEL_TEXT_EMBED: {
		id: 'SHARED_CONTENT_BUILDER_LABEL_TEXT_EMBED',
		description: 'The label text for "embed" content.',
		defaultMessage: 'Embed',
	},
	SHARED_CONTENT_BUILDER_DESCRIPTION_TEXT_EMBED: {
		id: 'SHARED_CONTENT_BUILDER_DESCRIPTION_TEXT_EMBED',
		description: 'The description text for "embed" content.',
		defaultMessage: 'Embeddable content, i.e. Iframes or PDFs',
	},
	SHARED_CONTENT_BUILDER_LABEL_TEXT_FORM: {
		id: 'SHARED_CONTENT_BUILDER_LABEL_TEXT_FORM',
		description: 'The label text for "form" content.',
		defaultMessage: 'Form',
	},
	SHARED_CONTENT_BUILDER_DESCRIPTION_TEXT_FORM: {
		id: 'SHARED_CONTENT_BUILDER_DESCRIPTION_TEXT_FORM',
		description: 'The description text for "form" content.',
		defaultMessage: 'Collect information from learners',
	},
	SHARED_CONTENT_BUILDER_LABEL_TEXT_IMAGE: {
		id: 'SHARED_CONTENT_BUILDER_LABEL_TEXT_IMAGE',
		description: 'The label text for "image" content.',
		defaultMessage: 'Image',
	},
	SHARED_CONTENT_BUILDER_DESCRIPTION_TEXT_IMAGE: {
		id: 'SHARED_CONTENT_BUILDER_DESCRIPTION_TEXT_IMAGE',
		description: 'The description text for "image" content.',
		defaultMessage: 'Upload or choose from Dropbox, Google Drive, and others',
	},
	SHARED_CONTENT_BUILDER_LABEL_TEXT_POLL: {
		id: 'SHARED_CONTENT_BUILDER_LABEL_TEXT_POLL',
		description: 'The label text for "poll" content.',
		defaultMessage: 'Poll',
	},
	SHARED_CONTENT_BUILDER_DESCRIPTION_TEXT_POLL: {
		id: 'SHARED_CONTENT_BUILDER_DESCRIPTION_TEXT_POLL',
		description: 'The description text for "poll" content.',
		defaultMessage: 'Real-time, Q&A Polling',
	},
	SHARED_CONTENT_BUILDER_LABEL_TEXT_SLIDE: {
		id: 'SHARED_CONTENT_BUILDER_LABEL_TEXT_SLIDE',
		description: 'The label text for "slide" content.',
		defaultMessage: 'Slide',
	},
	SHARED_CONTENT_BUILDER_DESCRIPTION_TEXT_SLIDE: {
		id: 'SHARED_CONTENT_BUILDER_DESCRIPTION_TEXT_SLIDE',
		description: 'The description text for "slide" content.',
		defaultMessage: 'Rich text and embedded links',
	},
	SHARED_CONTENT_BUILDER_LABEL_TEXT_VIDEO: {
		id: 'SHARED_CONTENT_BUILDER_LABEL_TEXT_VIDEO',
		description: 'The label text for "video" content.',
		defaultMessage: 'Video',
	},
	SHARED_CONTENT_BUILDER_DESCRIPTION_TEXT_VIDEO: {
		id: 'SHARED_CONTENT_BUILDER_DESCRIPTION_TEXT_VIDEO',
		description: 'The description text for "video" content.',
		defaultMessage: 'Any hosted video (YouTube, Vimeo, etc.)',
	},
	SHARED_CONTENT_BUILDER_EMBED_FIELD_PLACEHOLDER_TEXT_TITLE: {
		id: 'SHARED_CONTENT_BUILDER_EMBED_FIELD_PLACEHOLDER_TEXT_TITLE',
		description: 'The field label for the embed "title" fields',
		defaultMessage: 'Title of embed'
	},
	SHARED_CONTENT_BUILDER_EMBED_FIELD_LABEL_TEXT_SRC: {
		id: 'SHARED_CONTENT_BUILDER_EMBED_FIELD_LABEL_TEXT_SRC',
		description: 'The field label for the embed "src" fields',
		defaultMessage: 'Embed Url'
	},
	SHARED_CONTENT_BUILDER_EMBED_FIELD_PLACEHOLDER_TEXT_SRC: {
		id: 'SHARED_CONTENT_BUILDER_EMBED_FIELD_PLACEHOLDER_TEXT_SRC',
		description: 'The field placeholder text for the embed "src" fields',
		defaultMessage: 'Add a link here (ex. https://www.youtube.com/watch?v=ZhHYYdlGx1A)'
	},
	SHARED_CONTENT_BUILDER_EMBED_FIELD_LABEL_TEXT_ASPECT_RATIO: {
		id: 'SHARED_CONTENT_BUILDER_EMBED_FIELD_LABEL_TEXT_ASPECT_RATIO',
		description: 'The field label for the embed "aspect ratio" fields',
		defaultMessage: 'Aspect Ratio'
	},
	SHARED_CONTENT_BUILDER_EMBED_FIELD_HELP_TEXT_ASPECT_RATIO: {
		id: 'SHARED_CONTENT_BUILDER_EMBED_FIELD_HELP_TEXT_ASPECT_RATIO',
		description: 'The field helper text for the embed "aspect ratio" fields',
		defaultMessage: 'Most embeds are 16:9, but older embeds and some other things might require a slightly different aspect ratio.'
	},
	SHARED_CONTENT_BUILDER_FORM_BUTTON_TEXT_CHANGE_FORM_ENTRY: {
		id: 'SHARED_CONTENT_BUILDER_BUTTON_TEXT_CHANGE_FORM_ENTRY',
		description: 'Button text for the link to change the form entry for the form.',
		defaultMessage: 'Change my answers',
	},
	SHARED_CONTENT_BUILDER_FORM_MSG_TEXT_HAS_FORM_ENTRY: {
		id: 'SHARED_CONTENT_BUILDER_FORM_MSG_TEXT_HAS_FORM_ENTRY',
		description: 'The message text to display once a user has submitted a form.',
		defaultMessage: 'Thanks for submitting your form entry!'
	},
	SHARED_CONTENT_BUILDER_FORM_EDITOR_MSG_TEXT_SAVE_ERROR: {
		id: 'SHARED_CONTENT_BUILDER_FORM_EDITOR_SAVE_ERROR',
		description: 'Error message text for saving the form editor',
		defaultMessage: 'Error while saving the form, please try again later.'
	},
	SHARED_CONTENT_BUILDER_FORM_EDITOR_MSG_TEXT_OPTIONS_REQUIRED: {
		id: 'SHARED_CONTENT_BUILDER_FORM_EDITOR_MSG_TEXT_OPTIONS_REQUIRED',
		description: 'Error message text for missing valid options of a form_field_option in the form editor',
		defaultMessage: 'The question requires at least 2 options.'
	},
	SHARED_CONTENT_BUILDER_FORM_EDITOR_BUTTON_TEXT_ADD_NEW_QUESTION: {
		id: 'SHARED_CONTENT_BUILDER_FORM_EDITOR_BUTTON_TEXT_ADD_NEW_QUESTION',
		description: 'The button text for the "add new question" button dropdown in the form editor',
		defaultMessage: 'Add Question'
	},
	SHARED_CONTENT_BUILDER_FORM_EDITOR_HOVER_TEXT_REMOVE_QUESTION: {
		id: 'SHARED_CONTENT_BUILDER_FORM_EDITOR_HOVER_TEXT_REMOVE_QUESTION',
		description: 'The hover text for the "remove question" button in the form editor',
		defaultMessage: 'Remove question'
	},
	SHARED_CONTENT_BUILDER_FORM_EDITOR_HOVER_TEXT_ADD_OPTION: {
		id: 'SHARED_CONTENT_BUILDER_FORM_EDITOR_HOVER_TEXT_ADD_OPTION',
		description: 'The hover text for the "add option" button for form fields in the form editor',
		defaultMessage: 'Add option'
	},
	SHARED_CONTENT_BUILDER_FORM_EDITOR_HOVER_TEXT_REMOVE_OPTION: {
		id: 'SHARED_CONTENT_BUILDER_FORM_EDITOR_HOVER_TEXT_REMOVE_OPTION',
		description: 'The hover text for the "remove option" button for form fields in the form editor',
		defaultMessage: 'Remove option'
	},
	SHARED_CONTENT_BUILDER_FORM_EDITOR_FIELD_PLACEHOLDER_TEXT_TITLE: {
		id: 'SHARED_CONTENT_BUILDER_FORM_EDITOR_FIELD_PLACEHOLDER_TEXT_TITLE',
		description: 'The field placeholder text for the "title" field in the form editor',
		defaultMessage: 'Title of the form'
	},
	SHARED_CONTENT_BUILDER_FORM_EDITOR_FIELD_PLACEHOLDER_TEXT_DESCRIPTION: {
		id: 'SHARED_CONTENT_BUILDER_FORM_EDITOR_FIELD_PLACEHOLDER_TEXT_DESCRIPTION',
		description: 'The field placeholder text for the "description" field in the form editor',
		defaultMessage: 'Description'
	},
	SHARED_CONTENT_BUILDER_FORM_EDITOR_FIELD_PLACEHOLDER_TEXT_FIELD_TITLE: {
		id: 'SHARED_CONTENT_BUILDER_FORM_EDITOR_FIELD_PLACEHOLDER_TEXT_FIELD_TITLE',
		description: 'The field placeholder text for the "title" field for a field in the form editor',
		defaultMessage: 'Type {type} question here...'
	},
	SHARED_CONTENT_BUILDER_FORM_EDITOR_FIELD_PLACEHOLDER_TEXT_FORM_FIELD_OPTION: {
		id: 'SHARED_CONTENT_BUILDER_FORM_EDITOR_FIELD_PLACEHOLDER_TEXT_FORM_FIELD_OPTION',
		description: 'The field placeholder text value for the "form_field_option" field for a field in the form editor',
		defaultMessage: 'Option {index}'
	},
	SHARED_CONTENT_BUILDER_IMAGE_BUTTON_TEXT_CHANGE_IMAGE: {
		id: 'SHARED_CONTENT_BUILDER_IMAGE_BUTTON_TEXT_CHANGE_IMAGE',
		description: 'The text for the "change image" button',
		defaultMessage: 'Change Image'
	},
	SHARED_CONTENT_BUILDER_IMAGE_BUTTON_TEXT_UPLOAD_IMAGE: {
		id: 'SHARED_CONTENT_BUILDER_IMAGE_BUTTON_TEXT_UPLOAD_IMAGE',
		description: 'The text for the "upload image" button',
		defaultMessage: 'Upload Image'
	},
	SHARED_CONTENT_BUILDER_IMAGE_FIELD_LABEL_TEXT_ALT: {
		id: 'SHARED_CONTENT_BUILDER_IMAGE_FIELD_LABEL_TEXT_ALT',
		description: 'The field label for the image "alt text" fields',
		defaultMessage: 'Description'
	},
	SHARED_CONTENT_BUILDER_IMAGE_FIELD_PLACEHOLDER_TEXT_ALT: {
		id: 'SHARED_CONTENT_BUILDER_IMAGE_FIELD_PLACEHOLDER_TEXT_ALT',
		description: 'The field placeholder text for the image "alt text" fields',
		defaultMessage: 'Description'
	},
	SHARED_CONTENT_BUILDER_IMAGE_FIELD_HELP_TEXT_ALT: {
		id: 'SHARED_CONTENT_BUILDER_IMAGE_FIELD_HELP_TEXT_ALT',
		description: 'The field helper text for the image "alt text" fields',
		defaultMessage: 'A description helps improve accessibility and 508 compliance.'
	},
	SHARED_CONTENT_BUILDER_IMAGE_FIELD_LABEL_TEXT_LINK_TARGET: {
		id: 'SHARED_CONTENT_BUILDER_IMAGE_FIELD_LABEL_TEXT_LINK_TARGET',
		description: 'The field label for the image link "target" fields',
		defaultMessage: 'Target'
	},
	SHARED_CONTENT_BUILDER_IMAGE_FIELD_LABEL_TEXT_HREF: {
		id: 'SHARED_CONTENT_BUILDER_IMAGE_FIELD_LABEL_TEXT_HREF',
		description: 'The field label for the image "href" fields',
		defaultMessage: 'Link'
	},
	SHARED_CONTENT_BUILDER_IMAGE_FIELD_PLACEHOLDER_TEXT_HREF: {
		id: 'SHARED_CONTENT_BUILDER_IMAGE_FIELD_PLACEHOLDER_TEXT_HREF',
		description: 'The field placeholder text for the image "href" fields',
		defaultMessage: 'Link your image to other content'
	},
	SHARED_CONTENT_BUILDER_VIDEO_FIELD_LABEL_TEXT_ASPECT_RATIO: {
		id: 'SHARED_CONTENT_BUILDER_VIDEO_FIELD_LABEL_TEXT_ASPECT_RATIO',
		description: 'The field label for the video "aspect ratio" fields',
		defaultMessage: 'Aspect Ratio'
	},
	SHARED_CONTENT_BUILDER_VIDEO_FIELD_HELP_TEXT_ASPECT_RATIO: {
		id: 'SHARED_CONTENT_BUILDER_VIDEO_FIELD_HELP_TEXT_ASPECT_RATIO',
		description: 'The field helper text for the video "aspect ratio" fields',
		defaultMessage: 'Most videos are 16:9, but older videos and some other things might require a slightly different aspect ratio.'
	},
	SHARED_CONTENT_BUILDER_VIDEO_FIELD_LABEL_TEXT_SRC: {
		id: 'SHARED_CONTENT_BUILDER_VIDEO_FIELD_LABEL_TEXT_SRC',
		description: 'The field label for the video "src" fields',
		defaultMessage: 'Video Url'
	},
	SHARED_CONTENT_BUILDER_VIDEO_FIELD_PLACEHOLDER_TEXT_SRC: {
		id: 'SHARED_CONTENT_BUILDER_VIDEO_FIELD_PLACEHOLDER_TEXT_SRC',
		description: 'The field placeholder text for the video "video" fields',
		defaultMessage: 'Add a video link here (ex. https://www.youtube.com/watch?v=ZhHYYdlGx1A)'
	},
	SHARED_CONTENT_BUILDER_VIDEO_FIELD_PLACEHOLDER_TEXT_TITLE: {
		id: 'SHARED_CONTENT_BUILDER_VIDEO_FIELD_PLACEHOLDER_TEXT_TITLE',
		description: 'The field placeholder text for the video "title" fields',
		defaultMessage: 'Title of the video'
	},
	SHARED_CONTENT_BUILDER_POLL_FIELD_PLACEHOLDER_TEXT_FORM_FIELD_TITLE: {
		id: 'SHARED_CONTENT_BUILDER_POLL_FIELD_PLACEHOLDER_TEXT_FORM_FIELD_TITLE',
		description: 'The field placeholder text for the "title" for form fields in polls',
		defaultMessage: 'Type {type} question here...'
	},
	SHARED_CONTENT_BUILDER_POLL_FIELD_PLACEHOLDER_TEXT_TITLE: {
		id: 'SHARED_CONTENT_BUILDER_POLL_FIELD_PLACEHOLDER_TEXT_TITLE',
		description: 'The field placeholder text for the "title" field of a poll',
		defaultMessage: 'Title of the poll'
	},
	SHARED_CONTENT_BUILDER_POLL_FIELD_OPTION_ERROR_REQUIRED: {
		id: 'SHARED_CONTENT_BUILDER_POLL_FIELD_OPTION_ERROR_REQUIRED',
		description: 'The error text for the "value" field of a form_field_option of a poll',
		defaultMessage: 'The question requires at least 2 options.'
	},
	SHARED_CONTENT_BUILDER_SLIDE_FIELD_PLACEHOLDER_TEXT_TITLE: {
		id: 'SHARED_CONTENT_BUILDER_SLIDE_FIELD_PLACEHOLDER_TEXT_TITLE',
		description: 'The field placeholder text for the "title" field of a slide',
		defaultMessage: 'Title of the slide'
	},
	SHARED_CONTENT_BUILDER_FIELD_LABEL_TEXT_WIDTH: {
		id: 'SHARED_CONTENT_BUILDER_FIELD_LABEL_TEXT_WIDTH',
		description: 'The field label for width fields',
		defaultMessage: 'Width'
	},
	SHARED_CONTENT_BUILDER_OPTION_ASPECT_RATIO_LABEL_TEXT_21_BY_9: {
		id: 'SHARED_CONTENT_BUILDER_OPTION_ASPECT_RATIO_LABEL_TEXT_21_BY_9',
		description: 'The option label for "21by9" aspect ratio',
		defaultMessage: '21:9'
	},
	SHARED_CONTENT_BUILDER_OPTION_ASPECT_RATIO_LABEL_TEXT_2_BY_1: {
		id: 'SHARED_CONTENT_BUILDER_OPTION_ASPECT_RATIO_LABEL_TEXT_2_BY_1',
		description: 'The option label for "2by1" aspect ratio',
		defaultMessage: '2:1'
	},
	SHARED_CONTENT_BUILDER_OPTION_ASPECT_RATIO_LABEL_TEXT_16_BY_9: {
		id: 'SHARED_CONTENT_BUILDER_OPTION_ASPECT_RATIO_LABEL_TEXT_16_BY_9',
		description: 'The option label for "16by9" aspect ratio',
		defaultMessage: '16:9'
	},
	SHARED_CONTENT_BUILDER_OPTION_ASPECT_RATIO_LABEL_TEXT_5_BY_4: {
		id: 'SHARED_CONTENT_BUILDER_OPTION_ASPECT_RATIO_LABEL_TEXT_5_BY_4',
		description: 'The option label for "5by4" aspect ratio',
		defaultMessage: '5:4'
	},
	SHARED_CONTENT_BUILDER_OPTION_ASPECT_RATIO_LABEL_TEXT_4_BY_3: {
		id: 'SHARED_CONTENT_BUILDER_OPTION_ASPECT_RATIO_LABEL_TEXT_4_BY_3',
		description: 'The option label for "4by3" aspect ratio',
		defaultMessage: '4:3'
	},
	SHARED_CONTENT_BUILDER_OPTION_ASPECT_RATIO_LABEL_TEXT_1_BY_1: {
		id: 'SHARED_CONTENT_BUILDER_OPTION_ASPECT_RATIO_LABEL_TEXT_1_BY_1',
		description: 'The option label for "1by1" aspect ratio',
		defaultMessage: '1:1'
	},
	SHARED_CONTENT_BUILDER_OPTION_LINK_TARGET_LABEL_TEXT_NEW_WINDOW: {
		id: 'SHARED_CONTENT_BUILDER_OPTION_LINK_TARGET_LABEL_TEXT_NEW_WINDOW',
		description: 'The option label for "new window" link target',
		defaultMessage: 'New Window'
	},
	SHARED_CONTENT_BUILDER_OPTION_LINK_TARGET_LABEL_TEXT_NONE: {
		id: 'SHARED_CONTENT_BUILDER_OPTION_LINK_TARGET_LABEL_TEXT_NONE',
		description: 'The option label for "self" link target',
		defaultMessage: 'None'
	},
	SHARED_CONTENT_BUILDER_OPTION_WIDTH_LABEL_TEXT_FULL: {
		id: 'SHARED_CONTENT_BUILDER_OPTION_WIDTH_LABEL_TEXT_FULL',
		description: 'The option label for "full" width',
		defaultMessage: 'Full'
	},
	SHARED_CONTENT_BUILDER_OPTION_WIDTH_LABEL_TEXT_THREE_FOURTHS: {
		id: 'SHARED_CONTENT_BUILDER_OPTION_WIDTH_LABEL_TEXT_THREE_FOURTHS',
		description: 'The option label for "3/4" width',
		defaultMessage: '3/4'
	},
	SHARED_CONTENT_BUILDER_OPTION_WIDTH_LABEL_TEXT_TWO_THIRDS: {
		id: 'SHARED_CONTENT_BUILDER_OPTION_WIDTH_LABEL_TEXT_TWO_THIRDS',
		description: 'The option label for "2/3" width',
		defaultMessage: '2/3'
	},
	SHARED_CONTENT_BUILDER_OPTION_WIDTH_LABEL_TEXT_HALF: {
		id: 'SHARED_CONTENT_BUILDER_OPTION_WIDTH_LABEL_TEXT_HALF',
		description: 'The option label for "1/2" width',
		defaultMessage: '1/2'
	},
	SHARED_CONTENT_BUILDER_OPTION_WIDTH_LABEL_TEXT_ONE_THIRD: {
		id: 'SHARED_CONTENT_BUILDER_OPTION_WIDTH_LABEL_TEXT_ONE_THIRD',
		description: 'The option label for "1/3" width',
		defaultMessage: '1/3'
	},
	SHARED_CONTENT_BUILDER_OPTION_WIDTH_LABEL_TEXT_ONE_FOURTH: {
		id: 'SHARED_CONTENT_BUILDER_OPTION_WIDTH_LABEL_TEXT_ONE_FOURTH',
		description: 'The option label for "1/4" width',
		defaultMessage: '1/4'
	},
	SHARED_DELETE_CONFIRMATION_MODEL_SUBMIT_BUTTON_TEXT_LONG: {
		id: 'SHARED_DELETE_CONFIRMATION_MODEL_SUBMIT_BUTTON_TEXT_LONG',
		description: 'The label text for submit button for delete confirmation models.',
		defaultMessage: 'I understand the consequences, delete this {type}'
	},
	SHARED_DELETE_CONFIRMATION_MODEL_SUBMIT_BUTTON_TEXT_SHORT: {
		id: 'SHARED_DELETE_CONFIRMATION_MODEL_SUBMIT_BUTTON_TEXT_SHORT',
		description: 'The label text for submit button for delete confirmation models.',
		defaultMessage: 'Delete this {type}'
	},
	SHARED_DELETE_CONFIRMATION_MODEL_HEADER_TEXT: {
		id: 'SHARED_DELETE_CONFIRMATION_MODEL_HEADER_TEXT',
		description: 'The header text for the delete confirmation modal',
		defaultMessage: 'Delete {title}'
	},
	SHARED_DELETE_CONFIRMATION_MODEL_INFO_TEXT: {
		id: 'SHARED_DELETE_CONFIRMATION_MODEL_INFO_TEXT',
		description: 'The info alert text for the delete confirmation modal',
		defaultMessage: 'This action cannot be undone.'
	},
	SHARED_DELETE_CONFIRMATION_MODEL_FIELD_LABEL_TEXT_CONFIRMATION: {
		id: 'SHARED_DELETE_CONFIRMATION_MODEL_FIELD_LABEL_TEXT_CONFIRMATION',
		description: 'The field label for confirmation checkboxes',
		defaultMessage: 'I am certain'
	},
	SHARED_DELETE_CONFIRMATION_MODEL_PRELABEL_TEXT_CONFIRMATION: {
		id: 'SHARED_DELETE_CONFIRMATION_MODEL_PRELABEL_TEXT_CONFIRMATION',
		description: 'The pre label confirmation text for the delete confirmation modal',
		defaultMessage: 'Please confirm by checking the box below'
	},
	SHARED_DELETE_CONFIRMATION_MODEL_ERROR_TEXT_CONFIRMATION_REQUIRED: {
		id: 'SHARED_DELETE_CONFIRMATION_MODEL_ERROR_TEXT_CONFIRMATION_REQUIRED',
		description: 'The error msg text for "confirmation required" for the delete confirmation modal',
		defaultMessage: 'You must confirm before the {type} can be deleted.'
	},
	SHARED_DELETE_CONFIRMATION_MODAL_ERROR_MSG: {
		id: 'SHARED_DELETE_CONFIRMATION_MODAL_ERROR_MSG',
		description: 'Error message text for deleting',
		defaultMessage: 'Error while deleting {title}, please try again later.'
	},
	SHARED_EDIT_RULE_HEADER: {
		id: 'SHARED_EDIT_RULE_HEADER',
		description: 'The section label text for the rule editor modal',
		defaultMessage: 'To complete this {type}, the learner must have:'
	},
	SHARED_EDIT_RULE_ADDITIONAL_REQUIREMENTS_HEADER: {
		id: 'SHARED_EDIT_RULE_ADDITIONAL_REQUIREMENTS_HEADER',
		description: 'The additional requirements section label text for the rule editor modal',
		defaultMessage: 'Additional requirements:'
	},
	SHARED_EDIT_RULE_TEXT_NO_CONTENT_TO_COMPLETE: {
		id: 'SHARED_EDIT_RULE_TEXT_NO_CONTENT_TO_COMPLETE',
		description: 'The text for "no children to complete" for the rule editor modal',
		defaultMessage: 'No content to complete.'
	},
	SHARED_EDIT_RULE_FIELD_LABEL_TEXT_OPERATOR: {
		id: 'SHARED_EDIT_RULE_FIELD_LABEL_TEXT_OPERATOR',
		description: 'The field label for rule operation fields',
		defaultMessage: 'Choose an operator'
	},
	SHARED_EDIT_RULE_FIELD_OPTION_VALUE_OPERATOR_ANY: {
		id: 'SHARED_EDIT_RULE_FIELD_OPTION_VALUE_OPERATOR_ANY',
		description: 'The field option label for "any" for rule operation fields',
		defaultMessage: 'any'
	},
	SHARED_EDIT_RULE_FIELD_OPTION_VALUE_OPERATOR_ALL: {
		id: 'SHARED_EDIT_RULE_FIELD_OPTION_VALUE_OPERATOR_ALL',
		description: 'The field option label for "all" for rule operation fields',
		defaultMessage: 'all'
	},
	SHARED_EDIT_RULE_FIELD_LABEL_TEXT_COUNT: {
		id: 'SHARED_EDIT_RULE_FIELD_LABEL_TEXT_COUNT',
		description: 'The field label for rule count fields',
		defaultMessage: 'Number of children to complete'
	},
	SHARED_EDIT_RULE_ADDITIONAL_REQUIREMENTS_BUTTON_TEXT: {
		id: 'SHARED_EDIT_RULE_ADDITIONAL_REQUIREMENTS_BUTTON_TEXT',
		description: 'The button label for adding another requirement',
		defaultMessage: 'Add New Requirement'
	},
	SHARED_POLL_EDITOR_BUTTON_TEXT_ADD_NEW_QUESTION: {
		id: 'SHARED_POLL_EDITOR_BUTTON_TEXT_ADD_NEW_QUESTION',
		description: 'The button text for the "add new question" button dropdown in the poll editor',
		defaultMessage: 'Add Question'
	},
	SHARED_POLL_EDITOR_BUTTON_TEXT_ADD_FIRST_QUESTION: {
		id: 'SHARED_POLL_EDITOR_BUTTON_TEXT_ADD_FIRST_QUESTION',
		description: 'The button text for the "add first question" button dropdown in the poll editor',
		defaultMessage: 'Add Question'
	},
	SHARED_POLL_EDITOR_BUTTON_TEXT_CHOOSE_QUESTION_TYPE: {
		id: 'SHARED_POLL_EDITOR_BUTTON_TEXT_CHOOSE_QUESTION_TYPE',
		description: 'The button text for the "choose type" button dropdown in the poll editor',
		defaultMessage: 'Choose question type'
	},
	SHARED_POLL_EDITOR_DEFAULT_OPTION: {
		id: 'SHARED_POLL_EDITOR_DEFAULT_OPTION',
		description: 'The text value for the default option in form fields for the poll editor',
		defaultMessage: 'Option {index}'
	},
	SHARED_POLL_EDITOR_FIELD_TYPE_MULTIPLE_CHOICE: {
		id: 'SHARED_POLL_EDITOR_FIELD_TYPE_MULTIPLE_CHOICE',
		description: 'The text value for the "radio" field type for the poll editor',
		defaultMessage: 'Multiple Choice'
	},
	SHARED_POLL_EDITOR_FIELD_TYPE_SELECT: {
		id: 'SHARED_POLL_EDITOR_FIELD_TYPE_SELECT',
		description: 'The text value for the "select" field type for the poll editor',
		defaultMessage: 'Select'
	},
	SHARED_POLL_EDITOR_FIELD_LABEL_TEXT_TITLE: {
		id: 'SHARED_POLL_EDITOR_FIELD_LABEL_TEXT_TITLE',
		description: 'The field label text for the "title" field in polls',
		defaultMessage: 'Title'
	},
	SHARED_POLL_EDITOR_FIELD_PLACEHOLDER_TEXT_TITLE: {
		id: 'SHARED_POLL_EDITOR_FIELD_PLACEHOLDER_TEXT_TITLE',
		description: 'The field placeholder text for the "title" field in polls',
		defaultMessage: 'Title of the poll'
	},
	SHARED_POLL_EDITOR_FIELD_PLACEHOLDER_TEXT_FIELD_LABEL: {
		id: 'SHARED_POLL_EDITOR_FIELD_PLACEHOLDER_TEXT_FIELD_LABEL',
		description: 'The field placeholder text for the "label" for form fields in polls',
		defaultMessage: 'Type {type} question here...'
	},
	SHARED_POLL_EDITOR_HOVER_TITLE_REMOVE_FIELD: {
		id: 'SHARED_POLL_EDITOR_HOVER_TITLE_REMOVE_FIELD',
		description: 'The hover text for the "remove field" button for form fields in polls',
		defaultMessage: 'Remove question'
	},
	SHARED_POLL_EDITOR_HOVER_TITLE_ADD_OPTION: {
		id: 'SHARED_POLL_EDITOR_HOVER_TITLE_ADD_OPTION',
		description: 'The hover text for the "add option" button for form fields in polls',
		defaultMessage: 'Add option'
	},
	SHARED_POLL_EDITOR_HOVER_TITLE_REMOVE_OPTION: {
		id: 'SHARED_POLL_EDITOR_HOVER_TITLE_REMOVE_OPTION',
		description: 'The hover text for the "remove option" button for form fields in polls',
		defaultMessage: 'Remove option'
	},
	SHARED_POLL_EDITOR_ERROR_MSG: {
		id: 'SHARED_POLL_EDITOR_ERROR_MSG',
		description: 'Error message text for saving a poll',
		defaultMessage: 'Error while saving the poll, please try again later.'
	},
	SHARED_POLL_EDITOR_WARNING_MSG_DELETE_POLL: {
		id: 'SHARED_POLL_EDITOR_WARNING_MSG_DELETE_POLL',
		description: 'Warning message text for deleting a poll.',
		defaultMessage: 'This action will delete the poll and any and all results related to {title}.'
	},
	SHARED_POLL_EDITOR_PREVIEW_MSG_GET_STARTED: {
		id: 'SHARED_POLL_EDITOR_PREVIEW_MSG_GET_STARTED',
		description: 'Message text for the poll editor preview "get started" prompt',
		defaultMessage: 'Add a new question to the poll by choosing a question type from the left side.'
	},
	SHARED_POLL_RESULTS_BUTTON_TEXT_CHANGE_ANSWERS: {
		id: 'SHARED_POLL_RESULTS_BUTTON_TEXT_CHANGE_ANSWERS',
		description: 'Button text for the link to change answers to the poll.',
		defaultMessage: 'Change my answers',
	}
});
