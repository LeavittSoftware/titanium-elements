import { CrudEventTypes, EventBus } from '@leavittsoftware/leavitt-elements/lib/event-bus';

const fileExplorerEvents = new EventBus<'FileExplorerFileDto' | 'FileExplorerFolder', CrudEventTypes>();

Object.freeze(fileExplorerEvents);
export default fileExplorerEvents;
