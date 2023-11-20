import { EventBus } from '../../titanium/event-bus/event-bus';
const themePreferenceEvent = new EventBus<'theme-preference', 'change'>();
Object.freeze(themePreferenceEvent);
export default themePreferenceEvent;
