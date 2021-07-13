import { ActionCreatorProps, props } from '@ngrx/store';
import { IActionForcePayload } from '@modern-app/shared/utils/interfaces';

/**
 * Payload is payload-creator function with force
 *
 *
 * @description
 *
 * Create payload force => action
 *
 *
 */
export function payloadForce<
  P extends Record<string, unknown>
>(): ActionCreatorProps<{ payload: P & IActionForcePayload }> {
  return props<{ payload: P & IActionForcePayload }>();
}
