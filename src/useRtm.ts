import AgoraRTM from 'agora-rtm-sdk'

export const useRtm = () => {
  const joinRtm = async () => {
    const instance = AgoraRTM.createInstance('d5a326ac12e340669ae576f8a1ae4c9e')
  }

  return { joinRtm }
}