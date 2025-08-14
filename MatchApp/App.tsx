import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';
import { useState } from 'react';
import { WebView } from 'react-native-webview';

export default function App() {
  const [showWebView, setShowWebView] = useState(false);
  const [webViewUrl, setWebViewUrl] = useState('');

  const openTaraftarium24 = () => {
    setWebViewUrl('https://t24git.com/');
    setShowWebView(true);
  };

  const openInatTV = () => {
    setWebViewUrl('https://t.co/VHFhYOfhB2');
    setShowWebView(true);
  };

  const openBeinSports2 = () => {
    setWebViewUrl('https://t24git.com/player2.html?id=bein2');
    setShowWebView(true);
  };

  const openBeinSports1 = () => {
    setWebViewUrl('https://t24git.com/player.html?id=bein1');
    setShowWebView(true);
  };

  const openBeinSports3 = () => {
    setWebViewUrl('https://t24git.com/player2.html?id=bein3');
    setShowWebView(true);
  };

  const openBeinSports4 = () => {
    setWebViewUrl('https://t24git.com/player2.html?id=bein4');
    setShowWebView(true);
  };

  const openSSport1 = () => {
    setWebViewUrl('https://t24git.com/player2.html?id=ssport1');
    setShowWebView(true);
  };

  const openSSport2 = () => {
    setWebViewUrl('https://t24git.com/player2.html?id=ssport2');
    setShowWebView(true);
  };

  const openTivibu1 = () => {
    setWebViewUrl('https://t24git.com/player2.html?id=tivibu1');
    setShowWebView(true);
  };

  const openTivibu2 = () => {
    setWebViewUrl('https://t24git.com/player2.html?id=tivibu2');
    setShowWebView(true);
  };

  const openTivibu3 = () => {
    setWebViewUrl('https://t24git.com/player2.html?id=tivibu3');
    setShowWebView(true);
  };

  const openTivibu4 = () => {
    setWebViewUrl('https://t24git.com/player2.html?id=tivibu4');
    setShowWebView(true);
  };

  // iNat TV Kanal Fonksiyonları
  const openInatTVChannel = () => {
    setWebViewUrl('https://inattv1086.xyz/channel.html?id=yayininat');
    setShowWebView(true);
  };

  const openInatTVB2 = () => {
    setWebViewUrl('https://inattv1086.xyz/channel.html?id=yayinb2');
    setShowWebView(true);
  };

  const openInatTVB3 = () => {
    setWebViewUrl('https://inattv1086.xyz/channel.html?id=yayinb3');
    setShowWebView(true);
  };

  const openInatTVB4 = () => {
    setWebViewUrl('https://inattv1086.xyz/channel.html?id=yayinb4');
    setShowWebView(true);
  };

  const openInatTVB5 = () => {
    setWebViewUrl('https://inattv1086.xyz/channel.html?id=yayinb5');
    setShowWebView(true);
  };

  const openInatTVBM1 = () => {
    setWebViewUrl('https://inattv1086.xyz/channel.html?id=yayinbm1');
    setShowWebView(true);
  };

  const openInatTVBM2 = () => {
    setWebViewUrl('https://inattv1086.xyz/channel.html?id=yayinbm2');
    setShowWebView(true);
  };

  const openInatTVSS = () => {
    setWebViewUrl('https://inattv1086.xyz/channel.html?id=yayinss');
    setShowWebView(true);
  };

  const openInatTVSS2 = () => {
    setWebViewUrl('https://inattv1086.xyz/channel.html?id=yayinss2');
    setShowWebView(true);
  };

  const openInatTVT1 = () => {
    setWebViewUrl('https://inattv1086.xyz/channel.html?id=yayint1');
    setShowWebView(true);
  };

  if (showWebView) {
    if (Platform.OS === 'web') {
      // Web versiyonu için iframe kullan
      return (
        <View style={{ flex: 1, position: 'relative' }}>
          {/* Üst Menü */}
          <View style={[styles.webViewHeader, { position: 'absolute', top: 0, left: 0, right: 0, zIndex: 1000 }]}>
            <TouchableOpacity 
              style={styles.backButton}
              onPress={() => setShowWebView(false)}
            >
              <Text style={styles.backButtonText}>← Geri</Text>
            </TouchableOpacity>
            <Text style={styles.webViewTitle}>Canlı Maç İzle</Text>
            <TouchableOpacity 
              style={styles.fullscreenButton}
              onPress={() => {
                try {
                  const iframe = document.querySelector('iframe') as any;
                  if (iframe) {
                    // Önce video player'ları bul ve tam ekran yap
                    const videos = iframe.contentDocument?.querySelectorAll('video');
                    if (videos && videos.length > 0) {
                      // Video player'ı tam ekran yap
                      const video = videos[0] as any;
                      if (video.requestFullscreen) {
                        video.requestFullscreen();
                      } else if (video.webkitRequestFullscreen) {
                        video.webkitRequestFullscreen();
                      } else if (video.mozRequestFullScreen) {
                        video.mozRequestFullScreen();
                      } else if (video.msRequestFullscreen) {
                        video.msRequestFullscreen();
                      }
                    } else {
                      // Video bulunamazsa iframe'i tam ekran yap
                      if (iframe.requestFullscreen) {
                        iframe.requestFullscreen();
                      } else if (iframe.webkitRequestFullscreen) {
                        iframe.webkitRequestFullscreen();
                      } else if (iframe.mozRequestFullScreen) {
                        iframe.mozRequestFullScreen();
                      } else if (iframe.msRequestFullscreen) {
                        iframe.msRequestFullscreen();
                      }
                    }
                  }
                } catch (error) {
                  console.log('Tam ekran isteği gönderilemedi');
                }
              }}
            >
              <Text style={styles.fullscreenButtonText}>⛶ Tam Ekran</Text>
            </TouchableOpacity>
          </View>

          {/* iframe */}
          <iframe 
            src={webViewUrl}
            style={{
              width: '100vw',
              height: '100vh',
              border: 'none',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0
            }}
            title="Canlı Maç İzle"
            allowFullScreen={true}
            allow="fullscreen; autoplay; encrypted-media; picture-in-picture; display-capture; microphone; camera"
            frameBorder="0"
            scrolling="yes"
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-presentation"
            referrerPolicy="no-referrer"
            onLoad={() => {
              // Sayfa yüklendi, otomatik tam ekran yapılmıyor
              console.log('Sayfa yüklendi:', webViewUrl);
            }}
          />
        </View>
      );
    } else {
      // Mobile versiyonu için WebView kullan
      return (
        <View style={{ flex: 1 }}>
          {/* Üst Menü */}
          <View style={styles.webViewHeader}>
            <TouchableOpacity 
              style={styles.backButton}
              onPress={() => setShowWebView(false)}
            >
              <Text style={styles.backButtonText}>← Geri</Text>
            </TouchableOpacity>
            <Text style={styles.webViewTitle}>Canlı Maç İzle</Text>
          </View>

          {/* WebView */}
          <WebView 
            source={{ uri: webViewUrl }}
            style={{ flex: 1 }}
            javaScriptEnabled
            domStorageEnabled
            allowsFullscreenVideo={true}
            mediaPlaybackRequiresUserAction={false}
            allowsInlineMediaPlayback={true}
            allowsProtectedMedia={true}
            allowsBackForwardNavigationGestures={true}
            incognito={false}
            onShouldStartLoadWithRequest={(request) => {
              return true; // Tüm istekleri kabul et
            }}
          />
        </View>
      );
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Canlı Maç Izle - HikoSports</Text>
      <Text style={styles.subtitle}>Hoş Geldiniz!</Text>
      
      <TouchableOpacity 
        style={styles.taraftariumButton}
        onPress={openTaraftarium24}
      >
        <Text style={styles.buttonText}>Taraftarium24</Text>
      </TouchableOpacity>

      <View style={styles.buttonRow}>
        <TouchableOpacity 
          style={styles.beinSports1Button}
          onPress={openBeinSports1}
        >
          <Text style={styles.buttonText}>beIN 1</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.beinSports2Button}
          onPress={openBeinSports2}
        >
          <Text style={styles.buttonText}>beIN 2</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.beinSports3Button}
          onPress={openBeinSports3}
        >
          <Text style={styles.buttonText}>beIN 3</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.beinSports4Button}
          onPress={openBeinSports4}
        >
          <Text style={styles.buttonText}>beIN 4</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity 
          style={styles.sSport1Button}
          onPress={openSSport1}
        >
          <Text style={styles.buttonText}>S Sport 1</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.sSport2Button}
          onPress={openSSport2}
        >
          <Text style={styles.buttonText}>S Sport 2</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.tivibu1Button}
          onPress={openTivibu1}
        >
          <Text style={styles.buttonText}>Tivibu 1</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.tivibu2Button}
          onPress={openTivibu2}
        >
          <Text style={styles.buttonText}>Tivibu 2</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity 
          style={styles.tivibu3Button}
          onPress={openTivibu3}
        >
          <Text style={styles.buttonText}>Tivibu 3</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.tivibu4Button}
          onPress={openTivibu4}
        >
          <Text style={styles.buttonText}>Tivibu 4</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
        style={styles.inatTVButton}
        onPress={openInatTV}
      >
        <Text style={styles.buttonText}>iNat TV</Text>
      </TouchableOpacity>

      {/* iNat TV Kanalları */}
      <View style={styles.buttonRow}>
        <TouchableOpacity 
          style={styles.inatTVChannelButton}
          onPress={openInatTVChannel}
        >
          <Text style={styles.buttonText}>BeinSports1 - Inat</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.inatTVB2Button}
          onPress={openInatTVB2}
        >
          <Text style={styles.buttonText}>Bein Sports 2 - Inat</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.inatTVB3Button}
          onPress={openInatTVB3}
        >
          <Text style={styles.buttonText}>Bein Sports 3 - Inat</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.inatTVB4Button}
          onPress={openInatTVB4}
        >
          <Text style={styles.buttonText}>Bein Sports 4 - Inat</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity 
          style={styles.inatTVB5Button}
          onPress={openInatTVB5}
        >
          <Text style={styles.buttonText}>Bein Sports 5 - Inat</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.inatTVBM1Button}
          onPress={openInatTVBM1}
        >
          <Text style={styles.buttonText}>BeinMax1 - inat</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.inatTVBM2Button}
          onPress={openInatTVBM2}
        >
          <Text style={styles.buttonText}>Beinmax 2 - inat</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.inatTVSSButton}
          onPress={openInatTVSS}
        >
          <Text style={styles.buttonText}>SSports - inat</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity 
          style={styles.inatTVSS2Button}
          onPress={openInatTVSS2}
        >
          <Text style={styles.buttonText}>SSports 2 - inat</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.inatTVT1Button}
          onPress={openInatTVT1}
        >
          <Text style={styles.buttonText}>Tivibu1 - İnat</Text>
        </TouchableOpacity>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f0f0', alignItems: 'center', padding: 10 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#333', marginBottom: 5, marginTop: 10 },
  subtitle: { fontSize: 16, color: '#666', marginBottom: 15 },
  buttonText: { color: '#fff', fontSize: 11, fontWeight: '600' },
  taraftariumButton: { backgroundColor: '#FF6B35', paddingHorizontal: 30, paddingVertical: 15, borderRadius: 25, marginTop: 10 },
  buttonRow: { flexDirection: 'row', justifyContent: 'center', width: '100%', paddingHorizontal: 20, marginTop: 10, gap: 10 },
  beinSports1Button: { backgroundColor: '#E91E63', width: 85, height: 35, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  beinSports2Button: { backgroundColor: '#2196F3', width: 85, height: 35, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  beinSports3Button: { backgroundColor: '#9C27B0', width: 85, height: 35, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  beinSports4Button: { backgroundColor: '#FF9800', width: 85, height: 35, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  sSport1Button: { backgroundColor: '#795548', width: 85, height: 35, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  sSport2Button: { backgroundColor: '#607D8B', width: 85, height: 35, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  tivibu1Button: { backgroundColor: '#F44336', width: 85, height: 35, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  tivibu2Button: { backgroundColor: '#4CAF50', width: 85, height: 35, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  tivibu3Button: { backgroundColor: '#FF5722', width: 85, height: 35, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  tivibu4Button: { backgroundColor: '#00BCD4', width: 85, height: 35, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  inatTVButton: { backgroundColor: '#4CAF50', paddingHorizontal: 30, paddingVertical: 15, borderRadius: 25, marginTop: 10 },
  inatTVChannelButton: { backgroundColor: '#4CAF50', width: 85, height: 35, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  inatTVB2Button: { backgroundColor: '#8BC34A', width: 85, height: 35, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  inatTVB3Button: { backgroundColor: '#CDDC39', width: 85, height: 35, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  inatTVB4Button: { backgroundColor: '#FFEB3B', width: 85, height: 35, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  inatTVB5Button: { backgroundColor: '#FFC107', width: 85, height: 35, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  inatTVBM1Button: { backgroundColor: '#FF9800', width: 85, height: 35, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  inatTVBM2Button: { backgroundColor: '#FF5722', width: 85, height: 35, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  inatTVSSButton: { backgroundColor: '#795548', width: 85, height: 35, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  inatTVSS2Button: { backgroundColor: '#607D8B', width: 85, height: 35, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  inatTVT1Button: { backgroundColor: '#9C27B0', width: 85, height: 35, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  webViewHeader: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', padding: 15, borderBottomWidth: 1, borderBottomColor: '#e0e0e0' },
  fullscreenButton: { backgroundColor: '#FF5722', paddingHorizontal: 15, paddingVertical: 8, borderRadius: 20, marginLeft: 15 },
  fullscreenButtonText: { color: '#fff', fontSize: 14, fontWeight: '600' },
  backButton: { paddingHorizontal: 15, paddingVertical: 8, backgroundColor: '#007AFF', borderRadius: 20, marginRight: 15 },
  backButtonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  webViewTitle: { fontSize: 18, fontWeight: 'bold', color: '#333' }
});
