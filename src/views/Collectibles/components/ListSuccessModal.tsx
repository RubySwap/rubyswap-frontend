import React from 'react'
import styled from 'styled-components'
import { Button, Flex, Modal, Text } from '@twinkykms/rubyswap-uikit'
import { Nft } from 'config/constants/types'
import { useTranslation } from 'contexts/Localization'

interface ListSuccessModalProps {
  nft: Nft
  // bidify: any
  // onSuccess: () => any
  onDismiss?: () => void
  // onFailed: (error) => void
}

const ModalContent = styled.div`
  margin-bottom: 16px;
  padding: 0px 8px;
  max-width: 320px;
  width: 100%;
`

const Actions = styled.div`
  display: flex;
  justify-content: center;
  padding: 0px 8px;
`

const StyledImage = styled.img`
  width: 100%;
  transition: opacity 1s linear;
  height: 100%;
  object-fit: cover;
  border-radius: 24px;
  margin-top: 16px;
  margin-bottom: 16px;
`

const InlineLabelWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 24px;
  > ${Text} {
    min-width: 100px;
    font-size: 14px;
    margin-bottom: 2px;
  }
`
const ListSuccessModal: React.FC<ListSuccessModalProps> = ({ nft, onDismiss }) => {
  const { image, name } = nft
  const { t } = useTranslation()

  return (
    <Modal title={t('Auction started successfully')} onDismiss={onDismiss}>
      <ModalContent>
        <Flex flexDirection="column" width="100%">
          <Text>You have successfully listed {name}</Text>
          <StyledImage src={image} alt={name} />
          <Text>Feel free to share your NFT auction on the following platforms</Text>
          <InlineLabelWrapper>
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://twitter.com/intent/tweet?url=https://exchange.rubyswap.finance/collectibles?name=${name.replaceAll(
                ' ',
                '_',
              )}&text=I%20just%20listed%20my%20NFT%20on%20Rubyswap,%20come%20and%20check%20it%20out,`}
            >
              <img src="./images/twitter.png" alt="twitter" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://t.me/share/url?url=https://exchange.rubyswap.finance/collectibles?name=${name.replaceAll(
                ' ',
                '_',
              )}&text=I%20just%20listed%20my%20NFT%20on%20Rubyswap,%20come%20and%20check%20it%20out,`}
            >
              <img src="./images/telegram.png" alt="telegram" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://www.facebook.com/sharer/sharer.php?u=https://exchange.rubyswap.finance/collectibles?name=${name.replaceAll(
                ' ',
                '_',
              )}&quote=I%20just%20listed%20my%20NFT%20on%20Rubyswap,%20come%20and%20check%20it%20out,`}
            >
              <img src="./images/facebook.png" alt="facebook" />
            </a>
          </InlineLabelWrapper>
        </Flex>
      </ModalContent>
      <Actions>
        <Button width="100%" onClick={onDismiss}>
          {t('Close')}
        </Button>
      </Actions>
    </Modal>
  )
}

export default ListSuccessModal
