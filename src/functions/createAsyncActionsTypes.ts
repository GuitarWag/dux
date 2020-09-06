export interface AsyncActionsTypes<Start, Success, Error, DismissError> {
  START: Start;
  SUCCESS: Success;
  ERROR: Error;
  DISMISS_ERROR: DismissError;
}

export default function createAsyncActionsTypes<Start, Success, Error, DismissError>(
  namespace: string,
  actionName: string
): AsyncActionsTypes<Start, Success, Error, DismissError> {
  if (!namespace || !actionName) throw new Error('Either actionName or namespace could be undefined');
  if (typeof namespace !== 'string' || typeof actionName !== 'string')
    throw new Error('Either actionName or namespace could be different from string');
  return ({
    START: `${namespace}/${actionName}_START`,
    SUCCESS: `${namespace}/${actionName}_SUCCESS`,
    ERROR: `${namespace}/${actionName}_ERROR`,
    DISMISS_ERROR: `${namespace}/${actionName}_DISMISS_ERROR`,
  } as unknown) as AsyncActionsTypes<Start, Success, Error, DismissError>;
}
