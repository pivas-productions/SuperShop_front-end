'use client'
import share from '@/hooks/share-window';
import { Popover } from 'antd';
import React, { useEffect, useState } from 'react'
import { CiShare2 } from 'react-icons/ci'
import { FaPinterestP, FaTelegramPlane } from 'react-icons/fa';

import { SiOdnoklassniki, SiWhatsapp, SiViber } from 'react-icons/si';
import { SlSocialVkontakte } from 'react-icons/sl';
import { TbCopy } from "react-icons/tb";
import NotifyMessage from './messages/notify-message';

const ShareMenu = ({ media }) => {
  const [notifyMes, setNotifyMes] = useState("");
  const [stateNotify, setStateNotify] = useState("");
  const [url, setUrl] = useState('');

  useEffect(() => {
    const fullUrl = location.href;
    setUrl(fullUrl);
  }, [])
  const shareToSocial = (e) => {
    console.log('e.currentTarget', e.currentTarget.dataset.social)
    share(e.currentTarget.dataset.social, url, media)
  }
  const copyToClipboard = async (e) => {
    try {
      await navigator.clipboard.writeText(url)
      setNotifyMes("Скопировано")
      setStateNotify("success")
    } catch (error) {
      console.error("Unable to copy to clipboard.", error)
      setNotifyMes("Скопировать не удалось")
      setStateNotify("error")
    }
    setTimeout(() => {
      setNotifyMes("")
      setStateNotify("")
    }, 3000)
  }
  const hoverContent =
    <div className="ea010-a4 grid grid-flow-row gap-4">
      <button onClick={shareToSocial} className="share_btn flex gap-4 hover:text-pink-600" data-social={'vk'}>
        <SlSocialVkontakte className='w-5 h-5' />
        <span className="w-full text-center">Vkontakte</span>
      </button>
      <button onClick={shareToSocial} className="share_btn flex gap-4 hover:text-pink-600" data-social={'ok'}>
        <SiOdnoklassniki className='w-5 h-5' />
        <span className="w-full text-center">Odnoklassniki</span>
      </button>
      <button onClick={shareToSocial} className="share_btn flex gap-4 hover:text-pink-600" data-social={'tg'}>
        <FaTelegramPlane className='w-5 h-5' />
        <span className="w-full text-center">Telegram</span>
      </button>
      <button onClick={shareToSocial} className="share_btn flex gap-4 hover:text-pink-600" data-social={'wa'}>
        <SiWhatsapp className='w-5 h-5' />
        <span className="w-full text-center">WhatsApp</span>
      </button>
      <button onClick={shareToSocial} className="share_btn flex gap-4 hover:text-pink-600" data-social={'pt'}>
        <FaPinterestP className='w-5 h-5' />
        <span className="w-full text-center">Pinterest</span>
      </button>
      <button onClick={shareToSocial} className="share_btn flex gap-4 hover:text-pink-600" data-social={'vb'}>
        <SiViber className='w-5 h-5' />
        <span className="w-full text-center">Viber</span>
      </button>
      <button onClick={copyToClipboard} className="share_btn flex gap-4 hover:text-pink-600">
        <TbCopy className='w-5 h-5' />
        <span className="w-full text-center">Copy To Clipboard</span>
      </button>
    </div>

  return (
    <>
      <Popover
        content={hoverContent}
        trigger="hover"
      >
        <button>
          <CiShare2 className='w-8 h-8 cursor-pointer hover:text-gray-500' />
        </button>
        {notifyMes && <NotifyMessage message={notifyMes} state={stateNotify}></NotifyMessage>}
      </Popover>

    </>
  )
}


export default ShareMenu