import { CrudEventTypes, EventBus } from '../../../titanium/event-bus/event-bus';

const fileExplorerEvents = new EventBus<'FileExplorerFileDto' | 'FileExplorerFolder', CrudEventTypes>();

Object.freeze(fileExplorerEvents);
export default fileExplorerEvents;
